import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-10-98-seasonal-server');
}

export default function Thornia1098SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-10-98-seasonal-server" />;
}
