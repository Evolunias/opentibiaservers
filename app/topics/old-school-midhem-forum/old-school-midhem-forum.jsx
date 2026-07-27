import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-midhem-forum');
}

export default function OldSchoolMidhemForumKeywordPage() {
  return <StaticKeywordPage slug="old-school-midhem-forum" />;
}
