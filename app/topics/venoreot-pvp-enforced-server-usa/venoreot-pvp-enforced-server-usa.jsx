import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-pvp-enforced-server-usa');
}

export default function VenoreotPvpEnforcedServerUsaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-pvp-enforced-server-usa" />;
}
