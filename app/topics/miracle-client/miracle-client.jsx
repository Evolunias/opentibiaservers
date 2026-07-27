import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-client');
}

export default function MiracleClientKeywordPage() {
  return <StaticKeywordPage slug="miracle-client" />;
}
