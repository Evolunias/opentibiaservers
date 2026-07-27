import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-7-4-non-pvp-server');
}

export default function Carlinot74NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-7-4-non-pvp-server" />;
}
