import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-8-1-seasonal-server');
}

export default function Saintsot81SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-8-1-seasonal-server" />;
}
