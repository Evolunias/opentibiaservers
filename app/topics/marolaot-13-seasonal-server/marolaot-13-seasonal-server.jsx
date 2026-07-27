import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-13-seasonal-server');
}

export default function Marolaot13SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-13-seasonal-server" />;
}
