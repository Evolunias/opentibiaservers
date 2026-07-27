import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-coxaot-forum');
}

export default function OldSchoolCoxaotForumKeywordPage() {
  return <StaticKeywordPage slug="old-school-coxaot-forum" />;
}
