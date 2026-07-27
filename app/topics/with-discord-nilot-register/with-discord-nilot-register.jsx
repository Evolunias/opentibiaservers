import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-nilot-register');
}

export default function WithDiscordNilotRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-discord-nilot-register" />;
}
