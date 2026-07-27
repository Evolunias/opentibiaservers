import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-with-discord-ot-server');
}

export default function Tibia11WithDiscordOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-with-discord-ot-server" />;
}
