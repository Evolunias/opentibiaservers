import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-11-non-pvp-server');
}

export default function Carlinot11NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-11-non-pvp-server" />;
}
