import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-old-school-forum');
}

export default function Tibia81OldSchoolForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-old-school-forum" />;
}
