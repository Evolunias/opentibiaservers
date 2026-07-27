import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-13-seasonal-server');
}

export default function Otmadness13SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-13-seasonal-server" />;
}
