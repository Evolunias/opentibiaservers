import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-fresh-start-server-brazil');
}

export default function CarlinotFreshStartServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="carlinot-fresh-start-server-brazil" />;
}
