import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-10-98-seasonal-server');
}

export default function Evolera1098SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-10-98-seasonal-server" />;
}
