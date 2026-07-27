import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-pvp-server-argentina');
}

export default function CarlinotPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-pvp-server-argentina" />;
}
