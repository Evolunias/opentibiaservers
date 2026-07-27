import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-high-exp-server-canada');
}

export default function CarlinotHighExpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-high-exp-server-canada" />;
}
