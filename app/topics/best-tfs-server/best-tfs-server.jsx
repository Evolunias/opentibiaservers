import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tfs-server');
}

export default function BestTfsServerKeywordPage() {
  return <StaticKeywordPage slug="best-tfs-server" />;
}
