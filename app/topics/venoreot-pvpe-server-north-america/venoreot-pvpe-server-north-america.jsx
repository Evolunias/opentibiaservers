import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-pvpe-server-north-america');
}

export default function VenoreotPvpeServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-pvpe-server-north-america" />;
}
