import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-seasonal-server-uk');
}

export default function MadnessaliveSeasonalServerUkKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-seasonal-server-uk" />;
}
