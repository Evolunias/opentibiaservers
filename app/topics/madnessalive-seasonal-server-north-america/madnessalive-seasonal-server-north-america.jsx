import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-seasonal-server-north-america');
}

export default function MadnessaliveSeasonalServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-seasonal-server-north-america" />;
}
