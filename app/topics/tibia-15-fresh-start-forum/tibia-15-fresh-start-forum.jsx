import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-fresh-start-forum');
}

export default function Tibia15FreshStartForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-fresh-start-forum" />;
}
