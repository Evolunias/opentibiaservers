import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-oldera-server');
}

export default function SeasonalOlderaServerKeywordPage() {
  return <StaticKeywordPage slug="seasonal-oldera-server" />;
}
