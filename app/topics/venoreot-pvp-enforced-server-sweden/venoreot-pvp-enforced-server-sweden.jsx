import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-pvp-enforced-server-sweden');
}

export default function VenoreotPvpEnforcedServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="venoreot-pvp-enforced-server-sweden" />;
}
