import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-calmera-ot-forum');
}

export default function OldSchoolCalmeraOtForumKeywordPage() {
  return <StaticKeywordPage slug="old-school-calmera-ot-forum" />;
}
