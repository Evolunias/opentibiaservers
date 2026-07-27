import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-pvpe-server-europe');
}

export default function VenoreotPvpeServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="venoreot-pvpe-server-europe" />;
}
