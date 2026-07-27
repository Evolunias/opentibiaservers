import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-12-seasonal-server');
}

export default function Rubinot12SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-12-seasonal-server" />;
}
