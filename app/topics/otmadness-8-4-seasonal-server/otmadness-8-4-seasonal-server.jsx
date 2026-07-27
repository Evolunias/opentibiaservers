import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-8-4-seasonal-server');
}

export default function Otmadness84SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-8-4-seasonal-server" />;
}
