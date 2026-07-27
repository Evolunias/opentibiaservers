import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-13-pvp-enforced-server');
}

export default function Carlinot13PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-13-pvp-enforced-server" />;
}
