import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-arcaniarl-forum');
}

export default function LowrateArcaniarlForumKeywordPage() {
  return <StaticKeywordPage slug="lowrate-arcaniarl-forum" />;
}
