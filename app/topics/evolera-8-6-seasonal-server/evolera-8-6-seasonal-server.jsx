import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-8-6-seasonal-server');
}

export default function Evolera86SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-8-6-seasonal-server" />;
}
