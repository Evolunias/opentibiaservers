import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-14-seasonal-server');
}

export default function Rubinot14SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-14-seasonal-server" />;
}
