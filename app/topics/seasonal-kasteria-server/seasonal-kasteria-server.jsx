import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-kasteria-server');
}

export default function SeasonalKasteriaServerKeywordPage() {
  return <StaticKeywordPage slug="seasonal-kasteria-server" />;
}
