import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-7-6-seasonal-server');
}

export default function Rubinot76SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-7-6-seasonal-server" />;
}
