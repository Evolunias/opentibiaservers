import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-7-6-non-pvp-server');
}

export default function Carlinot76NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-7-6-non-pvp-server" />;
}
