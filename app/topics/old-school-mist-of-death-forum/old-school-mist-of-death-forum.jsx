import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-mist-of-death-forum');
}

export default function OldSchoolMistOfDeathForumKeywordPage() {
  return <StaticKeywordPage slug="old-school-mist-of-death-forum" />;
}
