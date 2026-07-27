import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-8-1-seasonal-server');
}

export default function Marolaot81SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-8-1-seasonal-server" />;
}
