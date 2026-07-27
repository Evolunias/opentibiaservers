import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-high-exp-server-usa');
}

export default function CarlinotHighExpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-high-exp-server-usa" />;
}
