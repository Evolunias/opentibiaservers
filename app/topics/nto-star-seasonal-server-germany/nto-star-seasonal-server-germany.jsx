import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-seasonal-server-germany');
}

export default function NtoStarSeasonalServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="nto-star-seasonal-server-germany" />;
}
