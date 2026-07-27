import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-midhem-guide');
}

export default function CustomMidhemGuideKeywordPage() {
  return <StaticKeywordPage slug="custom-midhem-guide" />;
}
