import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-evolera-private-server');
}

export default function CurrentEvoleraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="current-evolera-private-server" />;
}
