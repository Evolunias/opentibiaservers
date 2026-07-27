import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-cyntara-guide');
}

export default function NewCyntaraGuideKeywordPage() {
  return <StaticKeywordPage slug="new-cyntara-guide" />;
}
