import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-seasonal-server-poland');
}

export default function TibiaraSeasonalServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiara-seasonal-server-poland" />;
}
