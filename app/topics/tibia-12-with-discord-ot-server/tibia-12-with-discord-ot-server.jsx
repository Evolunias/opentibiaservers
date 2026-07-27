import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-with-discord-ot-server');
}

export default function Tibia12WithDiscordOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-with-discord-ot-server" />;
}
