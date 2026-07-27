import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-kasteria-wiki');
}

export default function TopKasteriaWikiKeywordPage() {
  return <StaticKeywordPage slug="top-kasteria-wiki" />;
}
