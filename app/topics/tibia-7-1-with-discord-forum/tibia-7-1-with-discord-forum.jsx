import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-with-discord-forum');
}

export default function Tibia71WithDiscordForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-with-discord-forum" />;
}
