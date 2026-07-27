import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-eternal-odyssey-server');
}

export default function HighrateEternalOdysseyServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-eternal-odyssey-server" />;
}
