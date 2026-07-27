import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-arcaniarl-forum');
}

export default function HighrateArcaniarlForumKeywordPage() {
  return <StaticKeywordPage slug="highrate-arcaniarl-forum" />;
}
