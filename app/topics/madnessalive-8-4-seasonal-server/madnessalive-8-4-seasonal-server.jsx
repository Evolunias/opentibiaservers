import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-8-4-seasonal-server');
}

export default function Madnessalive84SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-8-4-seasonal-server" />;
}
