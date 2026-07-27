import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-seasonal-server-canada');
}

export default function ClassicusSeasonalServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="classicus-seasonal-server-canada" />;
}
