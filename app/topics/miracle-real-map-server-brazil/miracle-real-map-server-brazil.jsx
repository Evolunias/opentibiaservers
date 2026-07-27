import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-real-map-server-brazil');
}

export default function MiracleRealMapServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="miracle-real-map-server-brazil" />;
}
