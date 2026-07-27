import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-12-seasonal-server');
}

export default function Realera12SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="realera-12-seasonal-server" />;
}
