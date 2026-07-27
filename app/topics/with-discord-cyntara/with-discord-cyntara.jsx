import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-cyntara');
}

export default function WithDiscordCyntaraKeywordPage() {
  return <StaticKeywordPage slug="with-discord-cyntara" />;
}
