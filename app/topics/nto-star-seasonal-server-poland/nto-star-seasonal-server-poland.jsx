import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-seasonal-server-poland');
}

export default function NtoStarSeasonalServerPolandKeywordPage() {
  return <StaticKeywordPage slug="nto-star-seasonal-server-poland" />;
}
