import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-14-seasonal-server');
}

export default function Saintsot14SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-14-seasonal-server" />;
}
