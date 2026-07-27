import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-8-0-seasonal-server');
}

export default function Marolaot80SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-8-0-seasonal-server" />;
}
