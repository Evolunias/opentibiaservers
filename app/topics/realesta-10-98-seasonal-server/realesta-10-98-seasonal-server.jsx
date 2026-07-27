import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-10-98-seasonal-server');
}

export default function Realesta1098SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-10-98-seasonal-server" />;
}
