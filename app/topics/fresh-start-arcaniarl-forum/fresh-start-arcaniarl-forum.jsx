import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-arcaniarl-forum');
}

export default function FreshStartArcaniarlForumKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-arcaniarl-forum" />;
}
