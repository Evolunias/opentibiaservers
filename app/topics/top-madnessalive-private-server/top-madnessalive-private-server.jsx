import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-madnessalive-private-server');
}

export default function TopMadnessalivePrivateServerKeywordPage() {
  return <StaticKeywordPage slug="top-madnessalive-private-server" />;
}
