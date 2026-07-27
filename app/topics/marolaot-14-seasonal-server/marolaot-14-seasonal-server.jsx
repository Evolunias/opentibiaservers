import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-14-seasonal-server');
}

export default function Marolaot14SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-14-seasonal-server" />;
}
