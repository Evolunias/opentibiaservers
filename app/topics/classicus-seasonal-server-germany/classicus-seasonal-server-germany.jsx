import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-seasonal-server-germany');
}

export default function ClassicusSeasonalServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="classicus-seasonal-server-germany" />;
}
