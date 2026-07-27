import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-harmonia-ot-forum');
}

export default function OldSchoolHarmoniaOtForumKeywordPage() {
  return <StaticKeywordPage slug="old-school-harmonia-ot-forum" />;
}
