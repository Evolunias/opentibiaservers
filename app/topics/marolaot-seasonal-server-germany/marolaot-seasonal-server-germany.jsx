import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-seasonal-server-germany');
}

export default function MarolaotSeasonalServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="marolaot-seasonal-server-germany" />;
}
