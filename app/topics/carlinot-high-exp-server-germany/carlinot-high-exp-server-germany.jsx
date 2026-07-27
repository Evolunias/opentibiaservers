import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-high-exp-server-germany');
}

export default function CarlinotHighExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="carlinot-high-exp-server-germany" />;
}
