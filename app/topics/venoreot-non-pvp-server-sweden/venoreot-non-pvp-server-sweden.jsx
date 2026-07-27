import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-non-pvp-server-sweden');
}

export default function VenoreotNonPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="venoreot-non-pvp-server-sweden" />;
}
