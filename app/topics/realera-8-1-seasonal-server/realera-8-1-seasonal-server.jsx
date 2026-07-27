import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-8-1-seasonal-server');
}

export default function Realera81SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="realera-8-1-seasonal-server" />;
}
