import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-7-72-seasonal-server');
}

export default function Thornia772SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-7-72-seasonal-server" />;
}
