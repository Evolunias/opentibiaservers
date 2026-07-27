import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-with-discord-ot-server');
}

export default function Tibia71WithDiscordOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-with-discord-ot-server" />;
}
