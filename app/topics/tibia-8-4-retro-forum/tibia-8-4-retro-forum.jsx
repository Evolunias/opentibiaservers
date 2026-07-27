import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-retro-forum');
}

export default function Tibia84RetroForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-retro-forum" />;
}
