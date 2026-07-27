import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibijka-private-server');
}

export default function BestTibijkaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="best-tibijka-private-server" />;
}
