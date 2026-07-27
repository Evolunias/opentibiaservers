import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-classicus-guide');
}

export default function LowrateClassicusGuideKeywordPage() {
  return <StaticKeywordPage slug="lowrate-classicus-guide" />;
}
