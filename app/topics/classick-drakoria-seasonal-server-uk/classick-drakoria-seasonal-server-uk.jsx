import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-seasonal-server-uk');
}

export default function ClassickDrakoriaSeasonalServerUkKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-seasonal-server-uk" />;
}
