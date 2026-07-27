import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-madnessalive-private-server');
}

export default function CustomMadnessalivePrivateServerKeywordPage() {
  return <StaticKeywordPage slug="custom-madnessalive-private-server" />;
}
