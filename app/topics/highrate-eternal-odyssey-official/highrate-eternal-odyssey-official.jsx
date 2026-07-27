import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-eternal-odyssey-official');
}

export default function HighrateEternalOdysseyOfficialKeywordPage() {
  return <StaticKeywordPage slug="highrate-eternal-odyssey-official" />;
}
