import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-eternal-odyssey-guide');
}

export default function OfficialEternalOdysseyGuideKeywordPage() {
  return <StaticKeywordPage slug="official-eternal-odyssey-guide" />;
}
