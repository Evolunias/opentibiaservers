import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-serenity-forum');
}

export default function OldSchoolSerenityForumKeywordPage() {
  return <StaticKeywordPage slug="old-school-serenity-forum" />;
}
