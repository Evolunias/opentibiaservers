import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-8-6-seasonal-server');
}

export default function Marolaot86SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-8-6-seasonal-server" />;
}
