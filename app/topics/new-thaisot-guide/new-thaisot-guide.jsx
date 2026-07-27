import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-thaisot-guide');
}

export default function NewThaisotGuideKeywordPage() {
  return <StaticKeywordPage slug="new-thaisot-guide" />;
}
