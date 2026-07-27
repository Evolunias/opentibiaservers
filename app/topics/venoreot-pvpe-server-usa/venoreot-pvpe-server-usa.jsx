import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-pvpe-server-usa');
}

export default function VenoreotPvpeServerUsaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-pvpe-server-usa" />;
}
