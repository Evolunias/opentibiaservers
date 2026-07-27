import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-seasonal-server-argentina');
}

export default function RealeraSeasonalServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="realera-seasonal-server-argentina" />;
}
