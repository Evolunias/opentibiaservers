import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-otmadness-private-server');
}

export default function HighrateOtmadnessPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-otmadness-private-server" />;
}
