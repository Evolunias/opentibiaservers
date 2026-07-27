import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-imperianic-rules');
}

export default function WithDiscordImperianicRulesKeywordPage() {
  return <StaticKeywordPage slug="with-discord-imperianic-rules" />;
}
