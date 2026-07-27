import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-10-0-seasonal-server');
}

export default function Rubinot100SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-10-0-seasonal-server" />;
}
