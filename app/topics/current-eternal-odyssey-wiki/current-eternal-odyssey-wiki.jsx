import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-eternal-odyssey-wiki');
}

export default function CurrentEternalOdysseyWikiKeywordPage() {
  return <StaticKeywordPage slug="current-eternal-odyssey-wiki" />;
}
