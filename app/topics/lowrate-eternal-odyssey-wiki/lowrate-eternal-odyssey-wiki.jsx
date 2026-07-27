import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-eternal-odyssey-wiki');
}

export default function LowrateEternalOdysseyWikiKeywordPage() {
  return <StaticKeywordPage slug="lowrate-eternal-odyssey-wiki" />;
}
