import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-retro-forum');
}

export default function Tibia96RetroForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-retro-forum" />;
}
