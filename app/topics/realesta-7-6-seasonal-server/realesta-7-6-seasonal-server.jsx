import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-7-6-seasonal-server');
}

export default function Realesta76SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-7-6-seasonal-server" />;
}
