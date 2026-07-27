import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-rubinot-register');
}

export default function WithDiscordRubinotRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-discord-rubinot-register" />;
}
