import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-seasonal-server-uk');
}

export default function NtoStarSeasonalServerUkKeywordPage() {
  return <StaticKeywordPage slug="nto-star-seasonal-server-uk" />;
}
