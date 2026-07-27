import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-7-6-seasonal-server');
}

export default function Evolera76SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-7-6-seasonal-server" />;
}
