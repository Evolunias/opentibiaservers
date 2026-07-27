import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-7-6-seasonal-server');
}

export default function Madnessalive76SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-7-6-seasonal-server" />;
}
