import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-seasonal-server-north-america');
}

export default function OlderaSeasonalServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="oldera-seasonal-server-north-america" />;
}
