import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-miracle-client');
}

export default function LowrateMiracleClientKeywordPage() {
  return <StaticKeywordPage slug="lowrate-miracle-client" />;
}
