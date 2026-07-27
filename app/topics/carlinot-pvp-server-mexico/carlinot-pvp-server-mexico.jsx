import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-pvp-server-mexico');
}

export default function CarlinotPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="carlinot-pvp-server-mexico" />;
}
