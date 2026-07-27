import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-15-pvp-enforced-server');
}

export default function Carlinot15PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-15-pvp-enforced-server" />;
}
