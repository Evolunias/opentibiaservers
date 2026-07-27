import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-kasteria-wiki');
}

export default function BestKasteriaWikiKeywordPage() {
  return <StaticKeywordPage slug="best-kasteria-wiki" />;
}
