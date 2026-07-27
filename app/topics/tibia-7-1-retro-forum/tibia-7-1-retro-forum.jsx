import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-retro-forum');
}

export default function Tibia71RetroForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-retro-forum" />;
}
