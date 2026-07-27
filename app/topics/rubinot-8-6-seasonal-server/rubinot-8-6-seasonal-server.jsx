import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-8-6-seasonal-server');
}

export default function Rubinot86SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-8-6-seasonal-server" />;
}
