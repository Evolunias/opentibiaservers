import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-15-seasonal-server');
}

export default function Madnessalive15SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-15-seasonal-server" />;
}
