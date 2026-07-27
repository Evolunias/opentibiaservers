import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-miracle-client');
}

export default function NoResetMiracleClientKeywordPage() {
  return <StaticKeywordPage slug="no-reset-miracle-client" />;
}
