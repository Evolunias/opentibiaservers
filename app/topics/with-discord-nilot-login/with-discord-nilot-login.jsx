import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-nilot-login');
}

export default function WithDiscordNilotLoginKeywordPage() {
  return <StaticKeywordPage slug="with-discord-nilot-login" />;
}
