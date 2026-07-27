import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-seasonal-server-europe');
}

export default function ClassickDrakoriaSeasonalServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-seasonal-server-europe" />;
}
