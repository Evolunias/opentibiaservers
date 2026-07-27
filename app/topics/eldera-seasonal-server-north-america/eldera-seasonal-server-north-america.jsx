import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-seasonal-server-north-america');
}

export default function ElderaSeasonalServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="eldera-seasonal-server-north-america" />;
}
