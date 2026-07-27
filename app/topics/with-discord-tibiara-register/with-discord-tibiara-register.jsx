import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiara-register');
}

export default function WithDiscordTibiaraRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiara-register" />;
}
