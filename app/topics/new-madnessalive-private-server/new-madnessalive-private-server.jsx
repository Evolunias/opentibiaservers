import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-madnessalive-private-server');
}

export default function NewMadnessalivePrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-madnessalive-private-server" />;
}
