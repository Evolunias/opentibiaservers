import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-miracle-client');
}

export default function ActiveMiracleClientKeywordPage() {
  return <StaticKeywordPage slug="active-miracle-client" />;
}
