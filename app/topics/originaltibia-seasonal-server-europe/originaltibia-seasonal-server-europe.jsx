import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-seasonal-server-europe');
}

export default function OriginaltibiaSeasonalServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-seasonal-server-europe" />;
}
