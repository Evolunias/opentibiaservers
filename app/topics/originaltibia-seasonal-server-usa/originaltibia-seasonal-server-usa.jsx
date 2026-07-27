import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-seasonal-server-usa');
}

export default function OriginaltibiaSeasonalServerUsaKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-seasonal-server-usa" />;
}
