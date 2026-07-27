import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-seasonal-server-argentina');
}

export default function ClassickDrakoriaSeasonalServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-seasonal-server-argentina" />;
}
