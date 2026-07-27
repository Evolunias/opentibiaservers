import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-seasonal-server-usa');
}

export default function RealeraSeasonalServerUsaKeywordPage() {
  return <StaticKeywordPage slug="realera-seasonal-server-usa" />;
}
