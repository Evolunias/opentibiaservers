import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-with-discord-register');
}

export default function Tibia96WithDiscordRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-with-discord-register" />;
}
