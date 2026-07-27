import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-rubinot-rules');
}

export default function WithDiscordRubinotRulesKeywordPage() {
  return <StaticKeywordPage slug="with-discord-rubinot-rules" />;
}
