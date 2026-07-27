import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-oldera-ots');
}

export default function BestOlderaOtsKeywordPage() {
  return <StaticKeywordPage slug="best-oldera-ots" />;
}
