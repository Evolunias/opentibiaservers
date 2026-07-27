import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-retro-forum');
}

export default function Tibia15RetroForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-retro-forum" />;
}
