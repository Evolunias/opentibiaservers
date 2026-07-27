import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-pvpe-server-poland');
}

export default function VenoreotPvpeServerPolandKeywordPage() {
  return <StaticKeywordPage slug="venoreot-pvpe-server-poland" />;
}
