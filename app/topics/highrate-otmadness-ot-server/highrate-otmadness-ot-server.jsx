import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-otmadness-ot-server');
}

export default function HighrateOtmadnessOtServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-otmadness-ot-server" />;
}
