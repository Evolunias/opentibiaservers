import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-11-seasonal-server');
}

export default function Realesta11SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-11-seasonal-server" />;
}
