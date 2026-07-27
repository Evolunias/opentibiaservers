import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-with-discord-forum');
}

export default function Tibia1098WithDiscordForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-with-discord-forum" />;
}
