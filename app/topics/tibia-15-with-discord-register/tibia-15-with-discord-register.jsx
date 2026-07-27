import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-with-discord-register');
}

export default function Tibia15WithDiscordRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-with-discord-register" />;
}
