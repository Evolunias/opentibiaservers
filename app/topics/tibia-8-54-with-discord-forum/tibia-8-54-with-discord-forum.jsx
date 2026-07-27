import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-with-discord-forum');
}

export default function Tibia854WithDiscordForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-with-discord-forum" />;
}
