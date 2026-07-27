import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-low-exp-server-germany');
}

export default function CarlinotLowExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="carlinot-low-exp-server-germany" />;
}
