import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-fresh-start-forum');
}

export default function Tibia71FreshStartForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-fresh-start-forum" />;
}
