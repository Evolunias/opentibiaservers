import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-arcaniarl-forum');
}

export default function NoResetArcaniarlForumKeywordPage() {
  return <StaticKeywordPage slug="no-reset-arcaniarl-forum" />;
}
