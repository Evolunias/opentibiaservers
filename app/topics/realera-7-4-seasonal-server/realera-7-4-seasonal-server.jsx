import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-7-4-seasonal-server');
}

export default function Realera74SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="realera-7-4-seasonal-server" />;
}
