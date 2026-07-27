import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-fresh-start-forum');
}

export default function Tibia12FreshStartForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-fresh-start-forum" />;
}
