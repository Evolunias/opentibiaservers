import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-13-seasonal-server');
}

export default function Madnessalive13SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-13-seasonal-server" />;
}
