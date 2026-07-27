import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-seasonal-server-north-america');
}

export default function ClassickDrakoriaSeasonalServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-seasonal-server-north-america" />;
}
