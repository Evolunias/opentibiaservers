import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-eternal-odyssey-forum');
}

export default function OldSchoolEternalOdysseyForumKeywordPage() {
  return <StaticKeywordPage slug="old-school-eternal-odyssey-forum" />;
}
