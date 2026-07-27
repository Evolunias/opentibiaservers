import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-arcaniarl-guide');
}

export default function OfficialArcaniarlGuideKeywordPage() {
  return <StaticKeywordPage slug="official-arcaniarl-guide" />;
}
