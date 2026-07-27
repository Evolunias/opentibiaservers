import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-fresh-start-forum');
}

export default function Tibia96FreshStartForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-fresh-start-forum" />;
}
