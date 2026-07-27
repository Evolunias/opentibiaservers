import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-7-1-seasonal-server');
}

export default function Marolaot71SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-7-1-seasonal-server" />;
}
