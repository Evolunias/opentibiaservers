import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-11-seasonal-server');
}

export default function Rubinot11SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-11-seasonal-server" />;
}
