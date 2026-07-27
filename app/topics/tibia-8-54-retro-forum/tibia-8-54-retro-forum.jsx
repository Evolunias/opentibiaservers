import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-retro-forum');
}

export default function Tibia854RetroForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-retro-forum" />;
}
