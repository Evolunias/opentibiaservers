import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-9-6-seasonal-server');
}

export default function Realesta96SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-9-6-seasonal-server" />;
}
