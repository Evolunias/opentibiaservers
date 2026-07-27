import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-10-0-seasonal-server');
}

export default function Marolaot100SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-10-0-seasonal-server" />;
}
