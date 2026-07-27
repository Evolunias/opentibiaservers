import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-10-98-seasonal-server');
}

export default function Realera1098SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="realera-10-98-seasonal-server" />;
}
