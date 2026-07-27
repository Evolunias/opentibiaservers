import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-realera-register');
}

export default function WithDiscordRealeraRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-discord-realera-register" />;
}
