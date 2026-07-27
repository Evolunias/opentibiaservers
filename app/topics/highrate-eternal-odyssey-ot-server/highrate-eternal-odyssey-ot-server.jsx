import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-eternal-odyssey-ot-server');
}

export default function HighrateEternalOdysseyOtServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-eternal-odyssey-ot-server" />;
}
