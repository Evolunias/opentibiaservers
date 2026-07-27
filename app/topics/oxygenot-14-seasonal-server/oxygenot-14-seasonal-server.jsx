import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-14-seasonal-server');
}

export default function Oxygenot14SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-14-seasonal-server" />;
}
