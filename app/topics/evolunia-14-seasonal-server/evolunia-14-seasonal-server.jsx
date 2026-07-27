import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-14-seasonal-server');
}

export default function Evolunia14SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-14-seasonal-server" />;
}
