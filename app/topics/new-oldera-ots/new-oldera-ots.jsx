import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-oldera-ots');
}

export default function NewOlderaOtsKeywordPage() {
  return <StaticKeywordPage slug="new-oldera-ots" />;
}
