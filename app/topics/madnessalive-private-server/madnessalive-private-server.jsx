import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-private-server');
}

export default function MadnessalivePrivateServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-private-server" />;
}
