import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-nostalther-forum');
}

export default function OldSchoolNostaltherForumKeywordPage() {
  return <StaticKeywordPage slug="old-school-nostalther-forum" />;
}
