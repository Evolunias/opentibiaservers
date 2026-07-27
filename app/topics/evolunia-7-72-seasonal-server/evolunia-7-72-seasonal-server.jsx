import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-7-72-seasonal-server');
}

export default function Evolunia772SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-7-72-seasonal-server" />;
}
