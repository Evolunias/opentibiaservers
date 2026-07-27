import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-madnessalive-private-server');
}

export default function CurrentMadnessalivePrivateServerKeywordPage() {
  return <StaticKeywordPage slug="current-madnessalive-private-server" />;
}
