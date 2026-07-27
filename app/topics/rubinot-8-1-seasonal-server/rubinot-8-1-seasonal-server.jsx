import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-8-1-seasonal-server');
}

export default function Rubinot81SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-8-1-seasonal-server" />;
}
