import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-9-6-seasonal-server');
}

export default function Marolaot96SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-9-6-seasonal-server" />;
}
