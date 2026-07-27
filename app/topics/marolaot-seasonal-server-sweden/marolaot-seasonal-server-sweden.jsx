import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-seasonal-server-sweden');
}

export default function MarolaotSeasonalServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="marolaot-seasonal-server-sweden" />;
}
