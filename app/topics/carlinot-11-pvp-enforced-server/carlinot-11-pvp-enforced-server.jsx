import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-11-pvp-enforced-server');
}

export default function Carlinot11PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-11-pvp-enforced-server" />;
}
