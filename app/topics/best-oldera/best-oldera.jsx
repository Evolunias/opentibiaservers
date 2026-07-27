import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-oldera');
}

export default function BestOlderaKeywordPage() {
  return <StaticKeywordPage slug="best-oldera" />;
}
