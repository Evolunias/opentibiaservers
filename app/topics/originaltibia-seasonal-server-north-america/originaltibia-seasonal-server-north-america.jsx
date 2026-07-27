import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-seasonal-server-north-america');
}

export default function OriginaltibiaSeasonalServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-seasonal-server-north-america" />;
}
