import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-12-seasonal-server');
}

export default function Otmadness12SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-12-seasonal-server" />;
}
