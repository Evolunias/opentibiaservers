import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-miracle-private-server');
}

export default function ActiveMiraclePrivateServerKeywordPage() {
  return <StaticKeywordPage slug="active-miracle-private-server" />;
}
