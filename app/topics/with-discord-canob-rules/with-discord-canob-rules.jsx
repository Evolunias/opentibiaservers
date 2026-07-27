import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-canob-rules');
}

export default function WithDiscordCanobRulesKeywordPage() {
  return <StaticKeywordPage slug="with-discord-canob-rules" />;
}
