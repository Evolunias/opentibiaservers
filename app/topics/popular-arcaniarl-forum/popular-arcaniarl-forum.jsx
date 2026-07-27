import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-arcaniarl-forum');
}

export default function PopularArcaniarlForumKeywordPage() {
  return <StaticKeywordPage slug="popular-arcaniarl-forum" />;
}
