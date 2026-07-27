import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-7-6-seasonal-server');
}

export default function Otmadness76SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-7-6-seasonal-server" />;
}
