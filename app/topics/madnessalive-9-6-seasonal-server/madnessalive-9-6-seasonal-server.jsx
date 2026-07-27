import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-9-6-seasonal-server');
}

export default function Madnessalive96SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-9-6-seasonal-server" />;
}
