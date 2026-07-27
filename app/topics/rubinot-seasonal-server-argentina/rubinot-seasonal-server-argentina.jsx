import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-seasonal-server-argentina');
}

export default function RubinotSeasonalServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-seasonal-server-argentina" />;
}
