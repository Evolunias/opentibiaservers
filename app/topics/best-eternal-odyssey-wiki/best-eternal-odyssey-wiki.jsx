import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-eternal-odyssey-wiki');
}

export default function BestEternalOdysseyWikiKeywordPage() {
  return <StaticKeywordPage slug="best-eternal-odyssey-wiki" />;
}
