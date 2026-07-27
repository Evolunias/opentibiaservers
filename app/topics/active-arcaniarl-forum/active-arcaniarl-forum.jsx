import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-arcaniarl-forum');
}

export default function ActiveArcaniarlForumKeywordPage() {
  return <StaticKeywordPage slug="active-arcaniarl-forum" />;
}
