import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-oldera-ots');
}

export default function FreshStartOlderaOtsKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-oldera-ots" />;
}
