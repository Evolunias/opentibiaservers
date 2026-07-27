import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-cyntara-discord');
}

export default function WithDiscordCyntaraDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-discord-cyntara-discord" />;
}
