import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-10-0-seasonal-server');
}

export default function Thornia100SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-10-0-seasonal-server" />;
}
