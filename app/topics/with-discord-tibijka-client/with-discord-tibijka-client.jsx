import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibijka-client');
}

export default function WithDiscordTibijkaClientKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibijka-client" />;
}
