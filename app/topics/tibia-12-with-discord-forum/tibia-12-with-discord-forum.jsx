import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-with-discord-forum');
}

export default function Tibia12WithDiscordForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-with-discord-forum" />;
}
