import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-seasonal-server-germany');
}

export default function ClassickDrakoriaSeasonalServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-seasonal-server-germany" />;
}
