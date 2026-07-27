import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-evo-forum');
}

export default function Tibia71EvoForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-evo-forum" />;
}
