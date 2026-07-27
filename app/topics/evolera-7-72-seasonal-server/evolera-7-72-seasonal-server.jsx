import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-7-72-seasonal-server');
}

export default function Evolera772SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-7-72-seasonal-server" />;
}
