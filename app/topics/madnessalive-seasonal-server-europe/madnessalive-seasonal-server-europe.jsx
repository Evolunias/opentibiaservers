import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-seasonal-server-europe');
}

export default function MadnessaliveSeasonalServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-seasonal-server-europe" />;
}
