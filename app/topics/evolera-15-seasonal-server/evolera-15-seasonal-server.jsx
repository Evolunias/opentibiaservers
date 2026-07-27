import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-15-seasonal-server');
}

export default function Evolera15SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-15-seasonal-server" />;
}
