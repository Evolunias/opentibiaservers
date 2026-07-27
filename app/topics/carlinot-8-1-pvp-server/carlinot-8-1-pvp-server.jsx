import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-8-1-pvp-server');
}

export default function Carlinot81PvpServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-8-1-pvp-server" />;
}
