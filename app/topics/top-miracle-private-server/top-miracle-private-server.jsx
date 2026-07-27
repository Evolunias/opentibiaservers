import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-miracle-private-server');
}

export default function TopMiraclePrivateServerKeywordPage() {
  return <StaticKeywordPage slug="top-miracle-private-server" />;
}
