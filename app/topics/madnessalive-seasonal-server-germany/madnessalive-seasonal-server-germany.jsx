import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-seasonal-server-germany');
}

export default function MadnessaliveSeasonalServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-seasonal-server-germany" />;
}
