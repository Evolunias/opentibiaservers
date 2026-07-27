import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-11-seasonal-server');
}

export default function Evolunia11SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-11-seasonal-server" />;
}
