import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-7-72-non-pvp-server');
}

export default function Carlinot772NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-7-72-non-pvp-server" />;
}
