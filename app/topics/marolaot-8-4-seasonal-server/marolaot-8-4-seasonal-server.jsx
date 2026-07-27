import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-8-4-seasonal-server');
}

export default function Marolaot84SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-8-4-seasonal-server" />;
}
