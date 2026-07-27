import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-seasonal-server-poland');
}

export default function RealeraSeasonalServerPolandKeywordPage() {
  return <StaticKeywordPage slug="realera-seasonal-server-poland" />;
}
