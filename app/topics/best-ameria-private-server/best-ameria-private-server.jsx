import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-ameria-private-server');
}

export default function BestAmeriaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="best-ameria-private-server" />;
}
