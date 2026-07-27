import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiascape-private-server');
}

export default function BestTibiascapePrivateServerKeywordPage() {
  return <StaticKeywordPage slug="best-tibiascape-private-server" />;
}
