import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-15-seasonal-server');
}

export default function Saintsot15SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-15-seasonal-server" />;
}
