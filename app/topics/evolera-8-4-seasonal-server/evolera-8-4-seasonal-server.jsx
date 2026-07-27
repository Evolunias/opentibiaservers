import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-8-4-seasonal-server');
}

export default function Evolera84SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-8-4-seasonal-server" />;
}
