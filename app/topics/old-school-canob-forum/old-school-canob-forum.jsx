import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-canob-forum');
}

export default function OldSchoolCanobForumKeywordPage() {
  return <StaticKeywordPage slug="old-school-canob-forum" />;
}
