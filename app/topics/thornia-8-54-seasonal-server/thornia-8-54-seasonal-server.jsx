import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-8-54-seasonal-server');
}

export default function Thornia854SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-8-54-seasonal-server" />;
}
