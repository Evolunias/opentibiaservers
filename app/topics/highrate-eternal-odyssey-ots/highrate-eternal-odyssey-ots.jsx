import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-eternal-odyssey-ots');
}

export default function HighrateEternalOdysseyOtsKeywordPage() {
  return <StaticKeywordPage slug="highrate-eternal-odyssey-ots" />;
}
