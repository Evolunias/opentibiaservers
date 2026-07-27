import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-oldera-server');
}

export default function BestOlderaServerKeywordPage() {
  return <StaticKeywordPage slug="best-oldera-server" />;
}
