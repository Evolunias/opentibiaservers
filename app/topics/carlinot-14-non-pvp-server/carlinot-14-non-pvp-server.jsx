import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-14-non-pvp-server');
}

export default function Carlinot14NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-14-non-pvp-server" />;
}
