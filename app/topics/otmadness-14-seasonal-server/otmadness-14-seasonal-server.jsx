import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-14-seasonal-server');
}

export default function Otmadness14SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-14-seasonal-server" />;
}
