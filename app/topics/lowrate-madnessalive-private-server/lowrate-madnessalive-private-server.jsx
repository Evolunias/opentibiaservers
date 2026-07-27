import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-madnessalive-private-server');
}

export default function LowrateMadnessalivePrivateServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-madnessalive-private-server" />;
}
