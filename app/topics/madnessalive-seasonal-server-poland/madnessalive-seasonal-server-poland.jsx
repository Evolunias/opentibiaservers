import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-seasonal-server-poland');
}

export default function MadnessaliveSeasonalServerPolandKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-seasonal-server-poland" />;
}
