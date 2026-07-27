import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-arcaniarl-guide');
}

export default function TopArcaniarlGuideKeywordPage() {
  return <StaticKeywordPage slug="top-arcaniarl-guide" />;
}
