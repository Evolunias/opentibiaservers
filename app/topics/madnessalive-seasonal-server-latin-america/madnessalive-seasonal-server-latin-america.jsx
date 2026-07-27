import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-seasonal-server-latin-america');
}

export default function MadnessaliveSeasonalServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-seasonal-server-latin-america" />;
}
