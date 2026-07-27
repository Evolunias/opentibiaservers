import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-oldera-guide');
}

export default function NewOlderaGuideKeywordPage() {
  return <StaticKeywordPage slug="new-oldera-guide" />;
}
