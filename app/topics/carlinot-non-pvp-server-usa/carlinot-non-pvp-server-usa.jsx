import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-non-pvp-server-usa');
}

export default function CarlinotNonPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-non-pvp-server-usa" />;
}
