import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-retro-forum');
}

export default function Tibia80RetroForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-retro-forum" />;
}
