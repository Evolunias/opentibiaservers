import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-seasonal-server-latin-america');
}

export default function ClassickDrakoriaSeasonalServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-seasonal-server-latin-america" />;
}
