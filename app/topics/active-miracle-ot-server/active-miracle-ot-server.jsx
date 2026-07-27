import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-miracle-ot-server');
}

export default function ActiveMiracleOtServerKeywordPage() {
  return <StaticKeywordPage slug="active-miracle-ot-server" />;
}
