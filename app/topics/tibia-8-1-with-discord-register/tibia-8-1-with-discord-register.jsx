import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-with-discord-register');
}

export default function Tibia81WithDiscordRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-with-discord-register" />;
}
