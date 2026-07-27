import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-7-4-seasonal-server');
}

export default function Realesta74SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-7-4-seasonal-server" />;
}
