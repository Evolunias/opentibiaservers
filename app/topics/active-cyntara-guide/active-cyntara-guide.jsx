import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-cyntara-guide');
}

export default function ActiveCyntaraGuideKeywordPage() {
  return <StaticKeywordPage slug="active-cyntara-guide" />;
}
