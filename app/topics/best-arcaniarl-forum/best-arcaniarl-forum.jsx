import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-arcaniarl-forum');
}

export default function BestArcaniarlForumKeywordPage() {
  return <StaticKeywordPage slug="best-arcaniarl-forum" />;
}
