import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-10-0-non-pvp-server');
}

export default function Carlinot100NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-10-0-non-pvp-server" />;
}
