import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-12-seasonal-server');
}

export default function Saintsot12SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-12-seasonal-server" />;
}
