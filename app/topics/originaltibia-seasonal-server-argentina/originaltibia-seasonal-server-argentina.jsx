import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-seasonal-server-argentina');
}

export default function OriginaltibiaSeasonalServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-seasonal-server-argentina" />;
}
