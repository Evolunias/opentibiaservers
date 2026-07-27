import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fidera-world');
}

export default function FideraWorldKeywordPage() {
  return <StaticKeywordPage slug="fidera-world" />;
}
