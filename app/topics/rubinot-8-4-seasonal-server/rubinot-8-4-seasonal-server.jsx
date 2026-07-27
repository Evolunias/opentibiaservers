import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-8-4-seasonal-server');
}

export default function Rubinot84SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-8-4-seasonal-server" />;
}
