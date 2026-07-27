import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-fresh-start-forum');
}

export default function Tibia80FreshStartForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-fresh-start-forum" />;
}
