import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-seasonal-server-mexico');
}

export default function ClassickDrakoriaSeasonalServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-seasonal-server-mexico" />;
}
