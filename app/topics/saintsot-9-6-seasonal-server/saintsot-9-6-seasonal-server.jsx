import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-9-6-seasonal-server');
}

export default function Saintsot96SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-9-6-seasonal-server" />;
}
