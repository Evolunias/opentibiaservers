import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-miracle-client');
}

export default function CustomMiracleClientKeywordPage() {
  return <StaticKeywordPage slug="custom-miracle-client" />;
}
