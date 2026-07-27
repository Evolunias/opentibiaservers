import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-thornia-login');
}

export default function WithDiscordThorniaLoginKeywordPage() {
  return <StaticKeywordPage slug="with-discord-thornia-login" />;
}
