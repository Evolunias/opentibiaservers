import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-midhem-guide');
}

export default function LowrateMidhemGuideKeywordPage() {
  return <StaticKeywordPage slug="lowrate-midhem-guide" />;
}
