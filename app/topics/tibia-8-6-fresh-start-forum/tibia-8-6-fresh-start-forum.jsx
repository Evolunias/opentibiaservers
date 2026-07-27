import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-fresh-start-forum');
}

export default function Tibia86FreshStartForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-fresh-start-forum" />;
}
