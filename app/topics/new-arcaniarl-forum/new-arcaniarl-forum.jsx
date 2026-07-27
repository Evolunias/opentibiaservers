import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-arcaniarl-forum');
}

export default function NewArcaniarlForumKeywordPage() {
  return <StaticKeywordPage slug="new-arcaniarl-forum" />;
}
