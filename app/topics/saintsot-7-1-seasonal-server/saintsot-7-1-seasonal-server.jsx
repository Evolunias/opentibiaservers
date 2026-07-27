import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-7-1-seasonal-server');
}

export default function Saintsot71SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-7-1-seasonal-server" />;
}
