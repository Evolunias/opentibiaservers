import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-pvp-enforced-server-mexico');
}

export default function CarlinotPvpEnforcedServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="carlinot-pvp-enforced-server-mexico" />;
}
