import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-seasonal-server-germany');
}

export default function RealeraSeasonalServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="realera-seasonal-server-germany" />;
}
