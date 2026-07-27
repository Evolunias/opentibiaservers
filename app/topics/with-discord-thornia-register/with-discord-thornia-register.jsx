import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-thornia-register');
}

export default function WithDiscordThorniaRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-discord-thornia-register" />;
}
