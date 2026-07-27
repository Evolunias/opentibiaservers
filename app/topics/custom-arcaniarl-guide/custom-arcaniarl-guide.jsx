import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-arcaniarl-guide');
}

export default function CustomArcaniarlGuideKeywordPage() {
  return <StaticKeywordPage slug="custom-arcaniarl-guide" />;
}
