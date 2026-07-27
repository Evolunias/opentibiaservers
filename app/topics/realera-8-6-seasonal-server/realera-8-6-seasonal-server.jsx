import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-8-6-seasonal-server');
}

export default function Realera86SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="realera-8-6-seasonal-server" />;
}
