import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-12-seasonal-server');
}

export default function Evolera12SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-12-seasonal-server" />;
}
