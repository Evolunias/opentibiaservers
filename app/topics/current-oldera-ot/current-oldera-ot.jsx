import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-oldera-ot');
}

export default function CurrentOlderaOtKeywordPage() {
  return <StaticKeywordPage slug="current-oldera-ot" />;
}
