import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-fresh-start-server-europe');
}

export default function CarlinotFreshStartServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="carlinot-fresh-start-server-europe" />;
}
