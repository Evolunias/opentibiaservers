import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-seasonal-server-north-america');
}

export default function ClassicusSeasonalServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="classicus-seasonal-server-north-america" />;
}
