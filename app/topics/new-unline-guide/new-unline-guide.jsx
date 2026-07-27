import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-unline-guide');
}

export default function NewUnlineGuideKeywordPage() {
  return <StaticKeywordPage slug="new-unline-guide" />;
}
