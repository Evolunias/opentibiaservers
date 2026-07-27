import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-13-seasonal-server');
}

export default function Realera13SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="realera-13-seasonal-server" />;
}
