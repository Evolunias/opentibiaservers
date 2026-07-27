import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-ranger-s-arcani-guide');
}

export default function LowrateRangerSArcaniGuideKeywordPage() {
  return <StaticKeywordPage slug="lowrate-ranger-s-arcani-guide" />;
}
