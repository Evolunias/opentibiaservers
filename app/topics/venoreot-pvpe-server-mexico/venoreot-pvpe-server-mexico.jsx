import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-pvpe-server-mexico');
}

export default function VenoreotPvpeServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="venoreot-pvpe-server-mexico" />;
}
