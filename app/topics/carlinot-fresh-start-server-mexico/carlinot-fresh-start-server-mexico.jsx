import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-fresh-start-server-mexico');
}

export default function CarlinotFreshStartServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="carlinot-fresh-start-server-mexico" />;
}
