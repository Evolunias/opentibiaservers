import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-midhem-wiki');
}

export default function PopularMidhemWikiKeywordPage() {
  return <StaticKeywordPage slug="popular-midhem-wiki" />;
}
