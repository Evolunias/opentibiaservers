import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-retro-server-germany');
}

export default function CarlinotRetroServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="carlinot-retro-server-germany" />;
}
