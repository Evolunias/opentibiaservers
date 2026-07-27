import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-arcaniarl-guide');
}

export default function FreshStartArcaniarlGuideKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-arcaniarl-guide" />;
}
