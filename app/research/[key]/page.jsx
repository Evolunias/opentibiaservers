import { notFound } from 'next/navigation';
import ResearchArticle from '@/app/components/ResearchArticle';
import {
  buildResearchArticle,
  listResearchSampleKeys,
  slugifyResearchPath,
} from '@/lib/research-wiki';
import { buildAbsoluteUrl, getSiteName } from '@/lib/seo';

export function generateStaticParams() {
  return listResearchSampleKeys().slice(0, 500).map((key) => ({ key }));
}

function keyToPath(key = '') {
  if (key === 'home') return '/';
  return '/' + String(key).split('__').join('/');
}

export async function generateMetadata({ params }) {
  const { key } = await params;
  const pathname = keyToPath(key);
  const article = buildResearchArticle(pathname);
  const title = article.title;
  const description = article.abstract.slice(0, 158);
  const canonical = buildAbsoluteUrl(`/research/${key}`);
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: { title, description, url: canonical, siteName: getSiteName(), type: 'article' },
    twitter: { card: 'summary', title, description },
  };
}

export default async function ResearchSlugPage({ params }) {
  const { key } = await params;
  if (!key) notFound();
  // Accept any key shaped like a path slug; samples are preferred but dynamic OK
  if (!/^[a-zA-Z0-9._-]+$/.test(key)) notFound();
  const pathname = keyToPath(key);
  const expected = slugifyResearchPath(pathname);
  if (expected !== key && key !== 'home') {
    // still allow direct keys
  }
  const article = buildResearchArticle(pathname);
  return <ResearchArticle article={article} />;
}
