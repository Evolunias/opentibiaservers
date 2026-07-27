import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-9-6-seasonal-server');
}

export default function Rubinot96SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-9-6-seasonal-server" />;
}
