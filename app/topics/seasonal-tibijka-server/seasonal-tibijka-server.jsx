import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-tibijka-server');
}

export default function SeasonalTibijkaServerKeywordPage() {
  return <StaticKeywordPage slug="seasonal-tibijka-server" />;
}
