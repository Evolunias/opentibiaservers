import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-seasonal-server-usa');
}

export default function ClassickDrakoriaSeasonalServerUsaKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-seasonal-server-usa" />;
}
