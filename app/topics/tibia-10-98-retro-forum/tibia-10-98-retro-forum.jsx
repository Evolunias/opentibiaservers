import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-retro-forum');
}

export default function Tibia1098RetroForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-retro-forum" />;
}
