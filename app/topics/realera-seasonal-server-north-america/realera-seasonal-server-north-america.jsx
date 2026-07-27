import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-seasonal-server-north-america');
}

export default function RealeraSeasonalServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="realera-seasonal-server-north-america" />;
}
