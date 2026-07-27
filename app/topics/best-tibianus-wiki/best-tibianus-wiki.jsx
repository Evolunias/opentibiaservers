import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibianus-wiki');
}

export default function BestTibianusWikiKeywordPage() {
  return <StaticKeywordPage slug="best-tibianus-wiki" />;
}
