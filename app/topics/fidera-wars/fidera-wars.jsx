import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fidera-wars');
}

export default function FideraWarsKeywordPage() {
  return <StaticKeywordPage slug="fidera-wars" />;
}
