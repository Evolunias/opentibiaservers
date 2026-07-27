import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-cyntara-rules');
}

export default function WithDiscordCyntaraRulesKeywordPage() {
  return <StaticKeywordPage slug="with-discord-cyntara-rules" />;
}
