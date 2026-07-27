import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-15-seasonal-server');
}

export default function Marolaot15SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-15-seasonal-server" />;
}
