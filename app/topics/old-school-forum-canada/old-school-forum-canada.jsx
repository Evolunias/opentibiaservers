import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-forum-canada');
}

export default function OldSchoolForumCanadaKeywordPage() {
  return <StaticKeywordPage slug="old-school-forum-canada" />;
}
