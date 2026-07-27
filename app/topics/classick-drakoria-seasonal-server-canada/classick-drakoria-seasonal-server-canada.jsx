import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-seasonal-server-canada');
}

export default function ClassickDrakoriaSeasonalServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-seasonal-server-canada" />;
}
