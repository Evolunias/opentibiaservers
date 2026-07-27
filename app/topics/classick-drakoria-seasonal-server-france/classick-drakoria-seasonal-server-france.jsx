import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-seasonal-server-france');
}

export default function ClassickDrakoriaSeasonalServerFranceKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-seasonal-server-france" />;
}
