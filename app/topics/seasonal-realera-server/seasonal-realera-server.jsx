import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-realera-server');
}

export default function SeasonalRealeraServerKeywordPage() {
  return <StaticKeywordPage slug="seasonal-realera-server" />;
}
