import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-alastera-guide');
}

export default function LowrateAlasteraGuideKeywordPage() {
  return <StaticKeywordPage slug="lowrate-alastera-guide" />;
}
