import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-8-6-seasonal-server');
}

export default function Otmadness86SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-8-6-seasonal-server" />;
}
