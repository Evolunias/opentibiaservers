import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-low-exp-server-brazil');
}

export default function CarlinotLowExpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="carlinot-low-exp-server-brazil" />;
}
