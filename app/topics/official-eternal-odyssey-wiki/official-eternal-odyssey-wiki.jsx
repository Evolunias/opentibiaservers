import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-eternal-odyssey-wiki');
}

export default function OfficialEternalOdysseyWikiKeywordPage() {
  return <StaticKeywordPage slug="official-eternal-odyssey-wiki" />;
}
