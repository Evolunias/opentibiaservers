import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-private-server');
}

export default function MiraclePrivateServerKeywordPage() {
  return <StaticKeywordPage slug="miracle-private-server" />;
}
