import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-7-6-seasonal-server');
}

export default function Evolunia76SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-7-6-seasonal-server" />;
}
