import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-14-seasonal-server');
}

export default function Realesta14SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-14-seasonal-server" />;
}
