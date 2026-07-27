import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-madnessalive-server');
}

export default function HighrateMadnessaliveServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-madnessalive-server" />;
}
