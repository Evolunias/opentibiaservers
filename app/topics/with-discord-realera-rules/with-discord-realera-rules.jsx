import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-realera-rules');
}

export default function WithDiscordRealeraRulesKeywordPage() {
  return <StaticKeywordPage slug="with-discord-realera-rules" />;
}
