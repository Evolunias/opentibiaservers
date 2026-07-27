import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-12-seasonal-server');
}

export default function Evolunia12SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-12-seasonal-server" />;
}
