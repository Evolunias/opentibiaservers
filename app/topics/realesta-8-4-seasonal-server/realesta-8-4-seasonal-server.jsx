import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-8-4-seasonal-server');
}

export default function Realesta84SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-8-4-seasonal-server" />;
}
