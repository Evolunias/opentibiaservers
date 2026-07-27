import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-oldera-guide');
}

export default function LowrateOlderaGuideKeywordPage() {
  return <StaticKeywordPage slug="lowrate-oldera-guide" />;
}
