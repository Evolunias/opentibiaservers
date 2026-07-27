import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pythera');
}

export default function PytheraKeywordPage() {
  return <StaticKeywordPage slug="pythera" />;
}
