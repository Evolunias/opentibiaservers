import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibijka');
}

export default function WithDiscordTibijkaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibijka" />;
}
