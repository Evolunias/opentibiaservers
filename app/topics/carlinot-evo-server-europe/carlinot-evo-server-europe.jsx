import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-evo-server-europe');
}

export default function CarlinotEvoServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="carlinot-evo-server-europe" />;
}
