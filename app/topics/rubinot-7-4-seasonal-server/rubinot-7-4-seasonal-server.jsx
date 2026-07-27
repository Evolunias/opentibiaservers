import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-7-4-seasonal-server');
}

export default function Rubinot74SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-7-4-seasonal-server" />;
}
