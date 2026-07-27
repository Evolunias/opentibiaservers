import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-sabrehaven-rules');
}

export default function WithDiscordSabrehavenRulesKeywordPage() {
  return <StaticKeywordPage slug="with-discord-sabrehaven-rules" />;
}
