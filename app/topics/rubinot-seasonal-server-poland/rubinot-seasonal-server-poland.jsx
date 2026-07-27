import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-seasonal-server-poland');
}

export default function RubinotSeasonalServerPolandKeywordPage() {
  return <StaticKeywordPage slug="rubinot-seasonal-server-poland" />;
}
