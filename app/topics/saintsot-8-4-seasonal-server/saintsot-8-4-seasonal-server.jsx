import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-8-4-seasonal-server');
}

export default function Saintsot84SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-8-4-seasonal-server" />;
}
