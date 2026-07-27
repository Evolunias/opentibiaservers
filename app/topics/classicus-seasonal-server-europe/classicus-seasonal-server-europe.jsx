import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-seasonal-server-europe');
}

export default function ClassicusSeasonalServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="classicus-seasonal-server-europe" />;
}
