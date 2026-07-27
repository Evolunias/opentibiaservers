import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-pvp-enforced-server-argentina');
}

export default function VenoreotPvpEnforcedServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-pvp-enforced-server-argentina" />;
}
