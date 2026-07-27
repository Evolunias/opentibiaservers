import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-10-0-seasonal-server');
}

export default function Realesta100SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-10-0-seasonal-server" />;
}
