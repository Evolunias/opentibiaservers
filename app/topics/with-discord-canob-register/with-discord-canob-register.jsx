import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-canob-register');
}

export default function WithDiscordCanobRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-discord-canob-register" />;
}
