import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-realesta-guide');
}

export default function LowrateRealestaGuideKeywordPage() {
  return <StaticKeywordPage slug="lowrate-realesta-guide" />;
}
