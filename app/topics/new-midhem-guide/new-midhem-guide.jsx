import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-midhem-guide');
}

export default function NewMidhemGuideKeywordPage() {
  return <StaticKeywordPage slug="new-midhem-guide" />;
}
