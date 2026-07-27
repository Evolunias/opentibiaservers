import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-8-1-seasonal-server');
}

export default function Realesta81SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-8-1-seasonal-server" />;
}
