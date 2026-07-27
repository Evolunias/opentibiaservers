import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-fresh-start-server-canada');
}

export default function CarlinotFreshStartServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-fresh-start-server-canada" />;
}
