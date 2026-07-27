import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-with-discord-forum');
}

export default function Tibia76WithDiscordForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-with-discord-forum" />;
}
