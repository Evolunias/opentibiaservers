import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pythera-world');
}

export default function PytheraWorldKeywordPage() {
  return <StaticKeywordPage slug="pythera-world" />;
}
