import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-demolidores-server');
}

export default function SeasonalDemolidoresServerKeywordPage() {
  return <StaticKeywordPage slug="seasonal-demolidores-server" />;
}
