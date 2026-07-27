import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-11-seasonal-server');
}

export default function Otmadness11SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-11-seasonal-server" />;
}
