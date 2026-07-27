import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-8-6-seasonal-server');
}

export default function Evolunia86SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-8-6-seasonal-server" />;
}
