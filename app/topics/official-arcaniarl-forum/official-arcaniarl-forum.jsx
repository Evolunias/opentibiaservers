import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-arcaniarl-forum');
}

export default function OfficialArcaniarlForumKeywordPage() {
  return <StaticKeywordPage slug="official-arcaniarl-forum" />;
}
