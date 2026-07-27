import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-otmadness-server');
}

export default function HighrateOtmadnessServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-otmadness-server" />;
}
