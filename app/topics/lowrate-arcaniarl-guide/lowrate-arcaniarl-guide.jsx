import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-arcaniarl-guide');
}

export default function LowrateArcaniarlGuideKeywordPage() {
  return <StaticKeywordPage slug="lowrate-arcaniarl-guide" />;
}
