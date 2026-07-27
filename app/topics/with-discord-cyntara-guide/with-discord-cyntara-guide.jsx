import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-cyntara-guide');
}

export default function WithDiscordCyntaraGuideKeywordPage() {
  return <StaticKeywordPage slug="with-discord-cyntara-guide" />;
}
