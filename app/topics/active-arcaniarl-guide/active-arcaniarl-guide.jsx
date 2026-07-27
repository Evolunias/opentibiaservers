import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-arcaniarl-guide');
}

export default function ActiveArcaniarlGuideKeywordPage() {
  return <StaticKeywordPage slug="active-arcaniarl-guide" />;
}
