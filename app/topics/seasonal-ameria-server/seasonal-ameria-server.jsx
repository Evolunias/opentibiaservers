import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-ameria-server');
}

export default function SeasonalAmeriaServerKeywordPage() {
  return <StaticKeywordPage slug="seasonal-ameria-server" />;
}
