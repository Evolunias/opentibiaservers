import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-14-seasonal-server');
}

export default function Realera14SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="realera-14-seasonal-server" />;
}
