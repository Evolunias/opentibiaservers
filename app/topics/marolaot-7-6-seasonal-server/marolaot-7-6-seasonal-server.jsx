import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-7-6-seasonal-server');
}

export default function Marolaot76SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-7-6-seasonal-server" />;
}
