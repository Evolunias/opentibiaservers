import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-eternal-odyssey-wiki');
}

export default function HighrateEternalOdysseyWikiKeywordPage() {
  return <StaticKeywordPage slug="highrate-eternal-odyssey-wiki" />;
}
