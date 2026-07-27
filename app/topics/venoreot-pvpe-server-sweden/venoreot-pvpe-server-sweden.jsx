import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-pvpe-server-sweden');
}

export default function VenoreotPvpeServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="venoreot-pvpe-server-sweden" />;
}
