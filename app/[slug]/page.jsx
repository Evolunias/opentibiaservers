import { notFound } from 'next/navigation';
import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildAbsoluteUrl, getSiteName } from '@/lib/seo';
import { getCuratedPage, getCuratedPages } from '@/lib/curated-pages';

export const revalidate = 3600;
export const dynamicParams = false;

export function generateStaticParams() {
  return getCuratedPages().map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }) {
  const page = getCuratedPage(params.slug);
  if (!page) return {};

  const title = `${page.primaryKeyword} | ${page.title} - ${getSiteName()}`;

  return {
    title,
    description: page.metaDescription,
    keywords: page.keywords,
    alternates: {
      canonical: buildAbsoluteUrl(page.path),
    },
    openGraph: {
      title,
      description: page.metaDescription,
      url: buildAbsoluteUrl(page.path),
      siteName: getSiteName(),
      type: 'article',
      images: page.heroImage ? [{ url: buildAbsoluteUrl(page.heroImage.src), alt: page.heroImage.alt }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: page.metaDescription,
      images: page.heroImage ? [buildAbsoluteUrl(page.heroImage.src)] : undefined,
    },
  };
}

export default async function ExactMatchCuratedPage({ params }) {
  const page = getCuratedPage(params.slug);
  if (!page) notFound();

  return <CuratedGuideArticle page={page} />;
}
