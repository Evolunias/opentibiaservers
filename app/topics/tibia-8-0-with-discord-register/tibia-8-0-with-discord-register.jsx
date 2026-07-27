import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-with-discord-register');
}

export default function Tibia80WithDiscordRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-with-discord-register" />;
}
