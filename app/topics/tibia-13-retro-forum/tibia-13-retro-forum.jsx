import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-retro-forum');
}

export default function Tibia13RetroForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-retro-forum" />;
}
