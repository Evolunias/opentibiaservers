import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-ameria-wiki');
}

export default function BestAmeriaWikiKeywordPage() {
  return <StaticKeywordPage slug="best-ameria-wiki" />;
}
