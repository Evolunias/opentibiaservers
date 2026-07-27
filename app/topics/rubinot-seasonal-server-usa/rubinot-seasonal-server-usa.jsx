import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-seasonal-server-usa');
}

export default function RubinotSeasonalServerUsaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-seasonal-server-usa" />;
}
