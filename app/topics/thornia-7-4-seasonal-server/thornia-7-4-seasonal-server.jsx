import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-7-4-seasonal-server');
}

export default function Thornia74SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-7-4-seasonal-server" />;
}
