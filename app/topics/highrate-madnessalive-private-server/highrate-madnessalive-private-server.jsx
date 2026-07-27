import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-madnessalive-private-server');
}

export default function HighrateMadnessalivePrivateServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-madnessalive-private-server" />;
}
