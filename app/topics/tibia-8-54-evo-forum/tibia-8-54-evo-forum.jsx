import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-evo-forum');
}

export default function Tibia854EvoForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-evo-forum" />;
}
