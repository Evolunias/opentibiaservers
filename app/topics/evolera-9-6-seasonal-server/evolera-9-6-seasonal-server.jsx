import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-9-6-seasonal-server');
}

export default function Evolera96SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-9-6-seasonal-server" />;
}
