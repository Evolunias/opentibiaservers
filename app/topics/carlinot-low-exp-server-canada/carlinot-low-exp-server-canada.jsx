import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-low-exp-server-canada');
}

export default function CarlinotLowExpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-low-exp-server-canada" />;
}
