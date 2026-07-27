import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-with-discord-register');
}

export default function Tibia100WithDiscordRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-with-discord-register" />;
}
