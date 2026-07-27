import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-guide');
}

export default function MidhemGuideKeywordPage() {
  return <StaticKeywordPage slug="midhem-guide" />;
}
