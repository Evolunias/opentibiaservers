import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-11-pvp-server');
}

export default function Carlinot11PvpServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-11-pvp-server" />;
}
