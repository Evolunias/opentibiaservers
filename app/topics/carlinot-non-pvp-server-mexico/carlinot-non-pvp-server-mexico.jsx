import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-non-pvp-server-mexico');
}

export default function CarlinotNonPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="carlinot-non-pvp-server-mexico" />;
}
