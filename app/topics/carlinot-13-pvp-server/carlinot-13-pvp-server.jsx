import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-13-pvp-server');
}

export default function Carlinot13PvpServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-13-pvp-server" />;
}
