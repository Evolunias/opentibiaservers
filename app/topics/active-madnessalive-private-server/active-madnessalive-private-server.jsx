import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-madnessalive-private-server');
}

export default function ActiveMadnessalivePrivateServerKeywordPage() {
  return <StaticKeywordPage slug="active-madnessalive-private-server" />;
}
