import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-13-seasonal-server');
}

export default function Rubinot13SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-13-seasonal-server" />;
}
