import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-forum');
}

export default function ArcaniarlForumKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-forum" />;
}
