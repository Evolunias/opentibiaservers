import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-oldera-client');
}

export default function BestOlderaClientKeywordPage() {
  return <StaticKeywordPage slug="best-oldera-client" />;
}
