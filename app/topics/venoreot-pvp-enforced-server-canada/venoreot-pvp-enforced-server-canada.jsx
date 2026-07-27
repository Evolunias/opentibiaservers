import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-pvp-enforced-server-canada');
}

export default function VenoreotPvpEnforcedServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-pvp-enforced-server-canada" />;
}
