import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-seasonal-server-south-america');
}

export default function MadnessaliveSeasonalServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-seasonal-server-south-america" />;
}
