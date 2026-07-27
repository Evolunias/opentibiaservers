import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-cyntara-guide');
}

export default function FreshStartCyntaraGuideKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-cyntara-guide" />;
}
