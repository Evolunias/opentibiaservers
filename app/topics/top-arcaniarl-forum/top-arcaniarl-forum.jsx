import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-arcaniarl-forum');
}

export default function TopArcaniarlForumKeywordPage() {
  return <StaticKeywordPage slug="top-arcaniarl-forum" />;
}
