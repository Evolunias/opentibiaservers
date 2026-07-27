import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-8-4-seasonal-server');
}

export default function Realera84SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="realera-8-4-seasonal-server" />;
}
