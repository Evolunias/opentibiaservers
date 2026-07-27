import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-evo-forum');
}

export default function Tibia86EvoForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-evo-forum" />;
}
