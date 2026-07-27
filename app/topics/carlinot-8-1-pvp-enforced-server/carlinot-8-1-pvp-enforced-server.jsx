import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-8-1-pvp-enforced-server');
}

export default function Carlinot81PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-8-1-pvp-enforced-server" />;
}
