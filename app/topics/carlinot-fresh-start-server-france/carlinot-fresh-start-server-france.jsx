import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-fresh-start-server-france');
}

export default function CarlinotFreshStartServerFranceKeywordPage() {
  return <StaticKeywordPage slug="carlinot-fresh-start-server-france" />;
}
