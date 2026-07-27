import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-7-1-pvp-server');
}

export default function Carlinot71PvpServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-7-1-pvp-server" />;
}
