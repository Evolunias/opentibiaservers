import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-pvpe-server-south-america');
}

export default function VenoreotPvpeServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-pvpe-server-south-america" />;
}
