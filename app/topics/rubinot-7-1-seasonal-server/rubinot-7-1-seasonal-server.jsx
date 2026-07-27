import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-7-1-seasonal-server');
}

export default function Rubinot71SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-7-1-seasonal-server" />;
}
