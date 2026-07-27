import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiaretro-register');
}

export default function WithDiscordTibiaretroRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiaretro-register" />;
}
