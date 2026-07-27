import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-miracle-server');
}

export default function ActiveMiracleServerKeywordPage() {
  return <StaticKeywordPage slug="active-miracle-server" />;
}
