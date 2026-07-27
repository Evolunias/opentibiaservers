import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibijka-login');
}

export default function WithDiscordTibijkaLoginKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibijka-login" />;
}
