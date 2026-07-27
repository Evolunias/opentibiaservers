import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-marolaot-server');
}

export default function SeasonalMarolaotServerKeywordPage() {
  return <StaticKeywordPage slug="seasonal-marolaot-server" />;
}
