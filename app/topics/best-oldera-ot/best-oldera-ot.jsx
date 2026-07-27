import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-oldera-ot');
}

export default function BestOlderaOtKeywordPage() {
  return <StaticKeywordPage slug="best-oldera-ot" />;
}
