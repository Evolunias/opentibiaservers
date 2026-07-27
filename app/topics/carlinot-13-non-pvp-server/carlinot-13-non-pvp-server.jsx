import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-13-non-pvp-server');
}

export default function Carlinot13NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-13-non-pvp-server" />;
}
