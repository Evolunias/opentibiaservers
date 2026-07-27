import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-midhem-guide');
}

export default function ActiveMidhemGuideKeywordPage() {
  return <StaticKeywordPage slug="active-midhem-guide" />;
}
