import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-14-seasonal-server');
}

export default function Evolera14SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-14-seasonal-server" />;
}
