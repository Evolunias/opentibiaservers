import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-seasonal-server-uk');
}

export default function ClassicusSeasonalServerUkKeywordPage() {
  return <StaticKeywordPage slug="classicus-seasonal-server-uk" />;
}
