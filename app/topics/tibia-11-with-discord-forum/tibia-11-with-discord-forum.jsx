import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-with-discord-forum');
}

export default function Tibia11WithDiscordForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-with-discord-forum" />;
}
