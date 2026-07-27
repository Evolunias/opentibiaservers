import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-evo-forum');
}

export default function Tibia80EvoForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-evo-forum" />;
}
