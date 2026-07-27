import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-seasonal-server-usa');
}

export default function MarolaotSeasonalServerUsaKeywordPage() {
  return <StaticKeywordPage slug="marolaot-seasonal-server-usa" />;
}
