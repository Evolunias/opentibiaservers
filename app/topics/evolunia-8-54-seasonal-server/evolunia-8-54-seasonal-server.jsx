import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-8-54-seasonal-server');
}

export default function Evolunia854SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-8-54-seasonal-server" />;
}
