import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-fresh-start-forum');
}

export default function Tibia84FreshStartForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-fresh-start-forum" />;
}
