import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-oldera-rules');
}

export default function WithDiscordOlderaRulesKeywordPage() {
  return <StaticKeywordPage slug="with-discord-oldera-rules" />;
}
