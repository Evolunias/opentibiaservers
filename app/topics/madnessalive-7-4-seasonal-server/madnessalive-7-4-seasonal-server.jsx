import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-7-4-seasonal-server');
}

export default function Madnessalive74SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-7-4-seasonal-server" />;
}
