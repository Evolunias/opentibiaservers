import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-high-exp-server-europe');
}

export default function CarlinotHighExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="carlinot-high-exp-server-europe" />;
}
