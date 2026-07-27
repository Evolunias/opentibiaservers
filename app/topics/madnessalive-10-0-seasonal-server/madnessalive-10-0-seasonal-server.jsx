import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-10-0-seasonal-server');
}

export default function Madnessalive100SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-10-0-seasonal-server" />;
}
