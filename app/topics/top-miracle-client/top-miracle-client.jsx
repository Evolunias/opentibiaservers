import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-miracle-client');
}

export default function TopMiracleClientKeywordPage() {
  return <StaticKeywordPage slug="top-miracle-client" />;
}
