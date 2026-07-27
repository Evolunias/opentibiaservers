import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-seasonal-server-france');
}

export default function MadnessaliveSeasonalServerFranceKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-seasonal-server-france" />;
}
