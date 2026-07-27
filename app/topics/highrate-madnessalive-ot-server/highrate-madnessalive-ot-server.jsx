import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-madnessalive-ot-server');
}

export default function HighrateMadnessaliveOtServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-madnessalive-ot-server" />;
}
