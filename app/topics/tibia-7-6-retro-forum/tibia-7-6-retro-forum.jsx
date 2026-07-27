import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-retro-forum');
}

export default function Tibia76RetroForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-retro-forum" />;
}
