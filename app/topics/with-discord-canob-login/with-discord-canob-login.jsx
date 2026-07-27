import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-canob-login');
}

export default function WithDiscordCanobLoginKeywordPage() {
  return <StaticKeywordPage slug="with-discord-canob-login" />;
}
