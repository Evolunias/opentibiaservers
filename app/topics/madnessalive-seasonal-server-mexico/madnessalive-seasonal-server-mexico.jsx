import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-seasonal-server-mexico');
}

export default function MadnessaliveSeasonalServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-seasonal-server-mexico" />;
}
