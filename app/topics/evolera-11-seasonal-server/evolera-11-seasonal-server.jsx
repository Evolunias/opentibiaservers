import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-11-seasonal-server');
}

export default function Evolera11SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-11-seasonal-server" />;
}
