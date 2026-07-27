import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-infernal-ot-forum');
}

export default function OldSchoolInfernalOtForumKeywordPage() {
  return <StaticKeywordPage slug="old-school-infernal-ot-forum" />;
}
