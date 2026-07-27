import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-12-seasonal-server');
}

export default function Marolaot12SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-12-seasonal-server" />;
}
