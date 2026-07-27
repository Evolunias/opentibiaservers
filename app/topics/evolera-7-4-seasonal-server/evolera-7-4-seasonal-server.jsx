import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-7-4-seasonal-server');
}

export default function Evolera74SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-7-4-seasonal-server" />;
}
