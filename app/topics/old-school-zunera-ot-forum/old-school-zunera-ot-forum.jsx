import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-zunera-ot-forum');
}

export default function OldSchoolZuneraOtForumKeywordPage() {
  return <StaticKeywordPage slug="old-school-zunera-ot-forum" />;
}
