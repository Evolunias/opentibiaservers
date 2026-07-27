import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-seasonal-server-uk');
}

export default function RealeraSeasonalServerUkKeywordPage() {
  return <StaticKeywordPage slug="realera-seasonal-server-uk" />;
}
