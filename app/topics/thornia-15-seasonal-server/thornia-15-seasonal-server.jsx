import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-15-seasonal-server');
}

export default function Thornia15SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-15-seasonal-server" />;
}
