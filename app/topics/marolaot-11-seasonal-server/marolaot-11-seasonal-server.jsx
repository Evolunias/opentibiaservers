import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-11-seasonal-server');
}

export default function Marolaot11SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-11-seasonal-server" />;
}
