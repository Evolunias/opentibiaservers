import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-7-4-seasonal-server');
}

export default function Otmadness74SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-7-4-seasonal-server" />;
}
