import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-13-seasonal-server');
}

export default function Evolera13SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-13-seasonal-server" />;
}
