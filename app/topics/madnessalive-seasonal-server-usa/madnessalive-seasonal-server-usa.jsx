import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-seasonal-server-usa');
}

export default function MadnessaliveSeasonalServerUsaKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-seasonal-server-usa" />;
}
