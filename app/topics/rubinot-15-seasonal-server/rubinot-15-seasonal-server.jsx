import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-15-seasonal-server');
}

export default function Rubinot15SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-15-seasonal-server" />;
}
