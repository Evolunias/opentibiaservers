import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-seasonal-server-poland');
}

export default function ClassicusSeasonalServerPolandKeywordPage() {
  return <StaticKeywordPage slug="classicus-seasonal-server-poland" />;
}
