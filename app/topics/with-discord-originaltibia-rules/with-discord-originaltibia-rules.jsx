import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-originaltibia-rules');
}

export default function WithDiscordOriginaltibiaRulesKeywordPage() {
  return <StaticKeywordPage slug="with-discord-originaltibia-rules" />;
}
