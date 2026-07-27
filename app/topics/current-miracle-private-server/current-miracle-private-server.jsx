import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-miracle-private-server');
}

export default function CurrentMiraclePrivateServerKeywordPage() {
  return <StaticKeywordPage slug="current-miracle-private-server" />;
}
