import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-pvpe-server-uk');
}

export default function VenoreotPvpeServerUkKeywordPage() {
  return <StaticKeywordPage slug="venoreot-pvpe-server-uk" />;
}
