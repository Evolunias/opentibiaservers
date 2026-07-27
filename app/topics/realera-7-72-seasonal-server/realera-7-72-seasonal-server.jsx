import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-7-72-seasonal-server');
}

export default function Realera772SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="realera-7-72-seasonal-server" />;
}
