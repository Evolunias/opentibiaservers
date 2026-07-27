import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-with-discord-forum');
}

export default function Tibia100WithDiscordForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-with-discord-forum" />;
}
