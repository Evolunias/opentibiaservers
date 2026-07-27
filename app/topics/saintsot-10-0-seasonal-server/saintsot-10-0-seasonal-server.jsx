import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-10-0-seasonal-server');
}

export default function Saintsot100SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-10-0-seasonal-server" />;
}
