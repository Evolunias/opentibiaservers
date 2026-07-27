import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-7-1-seasonal-server');
}

export default function Madnessalive71SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-7-1-seasonal-server" />;
}
