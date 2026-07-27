import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-seasonal-server-argentina');
}

export default function MadnessaliveSeasonalServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-seasonal-server-argentina" />;
}
