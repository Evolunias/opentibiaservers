import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-7-6-pvp-server');
}

export default function Carlinot76PvpServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-7-6-pvp-server" />;
}
