import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibijka-wiki');
}

export default function BestTibijkaWikiKeywordPage() {
  return <StaticKeywordPage slug="best-tibijka-wiki" />;
}
