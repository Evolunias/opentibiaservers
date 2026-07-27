import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibianus-rules');
}

export default function WithDiscordTibianusRulesKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibianus-rules" />;
}
