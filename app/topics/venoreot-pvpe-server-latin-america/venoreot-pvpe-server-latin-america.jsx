import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-pvpe-server-latin-america');
}

export default function VenoreotPvpeServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-pvpe-server-latin-america" />;
}
