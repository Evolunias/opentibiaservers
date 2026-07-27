import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-seasonal-server-poland');
}

export default function ClassickDrakoriaSeasonalServerPolandKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-seasonal-server-poland" />;
}
