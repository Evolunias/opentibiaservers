import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-fresh-start-forum');
}

export default function Tibia11FreshStartForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-fresh-start-forum" />;
}
