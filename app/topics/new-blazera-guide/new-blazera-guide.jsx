import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-blazera-guide');
}

export default function NewBlazeraGuideKeywordPage() {
  return <StaticKeywordPage slug="new-blazera-guide" />;
}
