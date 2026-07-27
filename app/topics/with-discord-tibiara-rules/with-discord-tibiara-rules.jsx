import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiara-rules');
}

export default function WithDiscordTibiaraRulesKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiara-rules" />;
}
