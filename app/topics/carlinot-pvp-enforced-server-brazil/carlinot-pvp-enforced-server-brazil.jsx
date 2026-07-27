import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-pvp-enforced-server-brazil');
}

export default function CarlinotPvpEnforcedServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="carlinot-pvp-enforced-server-brazil" />;
}
