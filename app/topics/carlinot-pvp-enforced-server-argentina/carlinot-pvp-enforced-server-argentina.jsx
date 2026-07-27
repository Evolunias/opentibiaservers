import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-pvp-enforced-server-argentina');
}

export default function CarlinotPvpEnforcedServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-pvp-enforced-server-argentina" />;
}
