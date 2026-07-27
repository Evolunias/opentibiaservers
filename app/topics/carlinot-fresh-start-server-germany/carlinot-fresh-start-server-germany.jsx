import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-fresh-start-server-germany');
}

export default function CarlinotFreshStartServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="carlinot-fresh-start-server-germany" />;
}
