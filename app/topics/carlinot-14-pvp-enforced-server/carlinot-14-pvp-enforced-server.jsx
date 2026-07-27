import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-14-pvp-enforced-server');
}

export default function Carlinot14PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-14-pvp-enforced-server" />;
}
