import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-10-0-seasonal-server');
}

export default function Evolunia100SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-10-0-seasonal-server" />;
}
