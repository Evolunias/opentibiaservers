import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-arcaniarl-guide');
}

export default function CurrentArcaniarlGuideKeywordPage() {
  return <StaticKeywordPage slug="current-arcaniarl-guide" />;
}
