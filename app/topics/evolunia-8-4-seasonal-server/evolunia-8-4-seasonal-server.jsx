import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-8-4-seasonal-server');
}

export default function Evolunia84SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-8-4-seasonal-server" />;
}
