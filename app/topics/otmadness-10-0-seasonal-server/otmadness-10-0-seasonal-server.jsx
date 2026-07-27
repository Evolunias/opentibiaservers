import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-10-0-seasonal-server');
}

export default function Otmadness100SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-10-0-seasonal-server" />;
}
