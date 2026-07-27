import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiascape-server');
}

export default function BestTibiascapeServerKeywordPage() {
  return <StaticKeywordPage slug="best-tibiascape-server" />;
}
