import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-7-1-pvp-enforced-server');
}

export default function Carlinot71PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-7-1-pvp-enforced-server" />;
}
