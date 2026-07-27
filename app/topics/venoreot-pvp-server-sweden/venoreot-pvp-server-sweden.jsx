import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-pvp-server-sweden');
}

export default function VenoreotPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="venoreot-pvp-server-sweden" />;
}
