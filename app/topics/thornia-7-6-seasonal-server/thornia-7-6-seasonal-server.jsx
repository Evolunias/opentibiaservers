import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-7-6-seasonal-server');
}

export default function Thornia76SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-7-6-seasonal-server" />;
}
