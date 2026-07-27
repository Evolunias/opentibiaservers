import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('julera-world');
}

export default function JuleraWorldKeywordPage() {
  return <StaticKeywordPage slug="julera-world" />;
}
