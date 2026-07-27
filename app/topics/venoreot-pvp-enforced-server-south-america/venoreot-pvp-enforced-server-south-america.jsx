import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-pvp-enforced-server-south-america');
}

export default function VenoreotPvpEnforcedServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-pvp-enforced-server-south-america" />;
}
