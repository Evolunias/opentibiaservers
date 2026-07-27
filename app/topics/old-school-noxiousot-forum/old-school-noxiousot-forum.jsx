import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-noxiousot-forum');
}

export default function OldSchoolNoxiousotForumKeywordPage() {
  return <StaticKeywordPage slug="old-school-noxiousot-forum" />;
}
