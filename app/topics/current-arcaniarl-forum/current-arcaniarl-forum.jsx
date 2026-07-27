import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-arcaniarl-forum');
}

export default function CurrentArcaniarlForumKeywordPage() {
  return <StaticKeywordPage slug="current-arcaniarl-forum" />;
}
