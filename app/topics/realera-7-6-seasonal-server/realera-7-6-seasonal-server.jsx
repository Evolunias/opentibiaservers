import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-7-6-seasonal-server');
}

export default function Realera76SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="realera-7-6-seasonal-server" />;
}
