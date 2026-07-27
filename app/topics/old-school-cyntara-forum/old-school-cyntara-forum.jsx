import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-cyntara-forum');
}

export default function OldSchoolCyntaraForumKeywordPage() {
  return <StaticKeywordPage slug="old-school-cyntara-forum" />;
}
