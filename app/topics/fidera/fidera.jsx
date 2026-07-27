import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fidera');
}

export default function FideraKeywordPage() {
  return <StaticKeywordPage slug="fidera" />;
}
