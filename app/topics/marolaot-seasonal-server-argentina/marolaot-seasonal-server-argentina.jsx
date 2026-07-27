import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-seasonal-server-argentina');
}

export default function MarolaotSeasonalServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="marolaot-seasonal-server-argentina" />;
}
