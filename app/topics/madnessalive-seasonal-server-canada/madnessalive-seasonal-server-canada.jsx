import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-seasonal-server-canada');
}

export default function MadnessaliveSeasonalServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-seasonal-server-canada" />;
}
