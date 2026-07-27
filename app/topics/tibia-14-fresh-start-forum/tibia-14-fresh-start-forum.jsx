import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-fresh-start-forum');
}

export default function Tibia14FreshStartForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-fresh-start-forum" />;
}
