import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-7-1-seasonal-server');
}

export default function Realera71SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="realera-7-1-seasonal-server" />;
}
