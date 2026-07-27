import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-retro-server-poland');
}

export default function CarlinotRetroServerPolandKeywordPage() {
  return <StaticKeywordPage slug="carlinot-retro-server-poland" />;
}
