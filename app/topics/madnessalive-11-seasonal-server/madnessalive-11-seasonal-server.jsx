import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-11-seasonal-server');
}

export default function Madnessalive11SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-11-seasonal-server" />;
}
