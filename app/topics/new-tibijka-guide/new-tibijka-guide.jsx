import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibijka-guide');
}

export default function NewTibijkaGuideKeywordPage() {
  return <StaticKeywordPage slug="new-tibijka-guide" />;
}
