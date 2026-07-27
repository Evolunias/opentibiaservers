import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-retro-server-uk');
}

export default function CarlinotRetroServerUkKeywordPage() {
  return <StaticKeywordPage slug="carlinot-retro-server-uk" />;
}
