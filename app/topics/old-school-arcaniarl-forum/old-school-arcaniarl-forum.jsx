import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-arcaniarl-forum');
}

export default function OldSchoolArcaniarlForumKeywordPage() {
  return <StaticKeywordPage slug="old-school-arcaniarl-forum" />;
}
