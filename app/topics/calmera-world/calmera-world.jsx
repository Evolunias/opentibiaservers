import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-world');
}

export default function CalmeraWorldKeywordPage() {
  return <StaticKeywordPage slug="calmera-world" />;
}
