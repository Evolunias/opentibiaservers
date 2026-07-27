import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-empirebr-forum');
}

export default function OldSchoolEmpirebrForumKeywordPage() {
  return <StaticKeywordPage slug="old-school-empirebr-forum" />;
}
