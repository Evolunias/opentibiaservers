import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibijka-server');
}

export default function BestTibijkaServerKeywordPage() {
  return <StaticKeywordPage slug="best-tibijka-server" />;
}
