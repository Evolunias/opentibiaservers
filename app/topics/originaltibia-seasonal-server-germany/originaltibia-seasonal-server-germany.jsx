import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-seasonal-server-germany');
}

export default function OriginaltibiaSeasonalServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-seasonal-server-germany" />;
}
