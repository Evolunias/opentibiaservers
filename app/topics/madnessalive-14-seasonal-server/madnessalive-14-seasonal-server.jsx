import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-14-seasonal-server');
}

export default function Madnessalive14SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-14-seasonal-server" />;
}
