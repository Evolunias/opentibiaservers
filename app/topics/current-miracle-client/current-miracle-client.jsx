import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-miracle-client');
}

export default function CurrentMiracleClientKeywordPage() {
  return <StaticKeywordPage slug="current-miracle-client" />;
}
