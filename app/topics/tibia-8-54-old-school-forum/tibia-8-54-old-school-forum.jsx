import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-old-school-forum');
}

export default function Tibia854OldSchoolForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-old-school-forum" />;
}
