import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-retro-forum');
}

export default function Tibia11RetroForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-retro-forum" />;
}
