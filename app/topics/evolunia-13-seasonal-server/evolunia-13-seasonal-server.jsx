import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-13-seasonal-server');
}

export default function Evolunia13SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-13-seasonal-server" />;
}
