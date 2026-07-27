import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-seasonal-server-brazil');
}

export default function MadnessaliveSeasonalServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-seasonal-server-brazil" />;
}
