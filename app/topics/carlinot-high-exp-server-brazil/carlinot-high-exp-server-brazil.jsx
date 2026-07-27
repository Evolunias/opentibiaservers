import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-high-exp-server-brazil');
}

export default function CarlinotHighExpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="carlinot-high-exp-server-brazil" />;
}
