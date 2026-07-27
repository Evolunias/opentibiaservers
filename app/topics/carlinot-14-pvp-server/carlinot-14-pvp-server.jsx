import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-14-pvp-server');
}

export default function Carlinot14PvpServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-14-pvp-server" />;
}
