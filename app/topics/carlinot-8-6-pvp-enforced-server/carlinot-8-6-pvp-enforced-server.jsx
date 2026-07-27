import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-8-6-pvp-enforced-server');
}

export default function Carlinot86PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-8-6-pvp-enforced-server" />;
}
