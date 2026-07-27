import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-8-1-seasonal-server');
}

export default function Otmadness81SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-8-1-seasonal-server" />;
}
