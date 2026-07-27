import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-retro-server-europe');
}

export default function CarlinotRetroServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="carlinot-retro-server-europe" />;
}
