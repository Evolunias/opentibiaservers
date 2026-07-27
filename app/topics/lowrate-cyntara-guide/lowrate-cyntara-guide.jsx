import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-cyntara-guide');
}

export default function LowrateCyntaraGuideKeywordPage() {
  return <StaticKeywordPage slug="lowrate-cyntara-guide" />;
}
