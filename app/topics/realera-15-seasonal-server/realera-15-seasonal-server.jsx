import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-15-seasonal-server');
}

export default function Realera15SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="realera-15-seasonal-server" />;
}
