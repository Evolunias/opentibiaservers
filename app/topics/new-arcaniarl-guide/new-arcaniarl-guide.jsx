import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-arcaniarl-guide');
}

export default function NewArcaniarlGuideKeywordPage() {
  return <StaticKeywordPage slug="new-arcaniarl-guide" />;
}
