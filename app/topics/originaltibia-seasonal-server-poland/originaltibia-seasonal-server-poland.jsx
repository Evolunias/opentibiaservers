import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-seasonal-server-poland');
}

export default function OriginaltibiaSeasonalServerPolandKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-seasonal-server-poland" />;
}
