import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-fresh-start-forum');
}

export default function Tibia854FreshStartForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-fresh-start-forum" />;
}
