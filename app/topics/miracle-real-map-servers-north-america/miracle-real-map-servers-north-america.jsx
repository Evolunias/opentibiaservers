import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-real-map-servers-north-america');
}

export default function MiracleRealMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="miracle-real-map-servers-north-america" />;
}
