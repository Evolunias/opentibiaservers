import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-pvp-server-usa');
}

export default function CarlinotPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-pvp-server-usa" />;
}
