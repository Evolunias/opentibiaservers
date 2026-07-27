import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-10-0-pvp-enforced-server');
}

export default function Carlinot100PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-10-0-pvp-enforced-server" />;
}
