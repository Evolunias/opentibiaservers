import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-madnessalive-private-server');
}

export default function NoResetMadnessalivePrivateServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-madnessalive-private-server" />;
}
