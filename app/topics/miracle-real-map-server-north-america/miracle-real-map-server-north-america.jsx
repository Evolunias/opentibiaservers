import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-real-map-server-north-america');
}

export default function MiracleRealMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="miracle-real-map-server-north-america" />;
}
