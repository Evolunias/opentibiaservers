import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-retro-forum');
}

export default function Tibia14RetroForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-retro-forum" />;
}
