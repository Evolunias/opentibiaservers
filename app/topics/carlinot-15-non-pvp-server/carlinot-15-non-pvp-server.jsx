import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-15-non-pvp-server');
}

export default function Carlinot15NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-15-non-pvp-server" />;
}
