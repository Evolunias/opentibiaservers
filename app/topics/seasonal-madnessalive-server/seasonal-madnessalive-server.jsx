import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-madnessalive-server');
}

export default function SeasonalMadnessaliveServerKeywordPage() {
  return <StaticKeywordPage slug="seasonal-madnessalive-server" />;
}
