import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-aurera-global-rules');
}

export default function WithDiscordAureraGlobalRulesKeywordPage() {
  return <StaticKeywordPage slug="with-discord-aurera-global-rules" />;
}
