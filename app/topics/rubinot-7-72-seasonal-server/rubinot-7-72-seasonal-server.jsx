import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-7-72-seasonal-server');
}

export default function Rubinot772SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-7-72-seasonal-server" />;
}
