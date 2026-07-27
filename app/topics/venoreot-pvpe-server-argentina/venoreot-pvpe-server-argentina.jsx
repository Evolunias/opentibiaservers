import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-pvpe-server-argentina');
}

export default function VenoreotPvpeServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-pvpe-server-argentina" />;
}
