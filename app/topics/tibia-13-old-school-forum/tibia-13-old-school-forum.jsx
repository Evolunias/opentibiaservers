import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-old-school-forum');
}

export default function Tibia13OldSchoolForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-old-school-forum" />;
}
