import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-seasonal-server-uk');
}

export default function OriginaltibiaSeasonalServerUkKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-seasonal-server-uk" />;
}
