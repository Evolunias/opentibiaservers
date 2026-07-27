import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-8-0-seasonal-server');
}

export default function Realesta80SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-8-0-seasonal-server" />;
}
