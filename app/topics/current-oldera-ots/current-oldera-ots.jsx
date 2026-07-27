import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-oldera-ots');
}

export default function CurrentOlderaOtsKeywordPage() {
  return <StaticKeywordPage slug="current-oldera-ots" />;
}
