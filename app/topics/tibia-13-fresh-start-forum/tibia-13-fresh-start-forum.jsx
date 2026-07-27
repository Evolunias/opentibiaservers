import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-fresh-start-forum');
}

export default function Tibia13FreshStartForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-fresh-start-forum" />;
}
