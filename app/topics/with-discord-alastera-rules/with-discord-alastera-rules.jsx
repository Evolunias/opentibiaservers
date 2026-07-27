import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-alastera-rules');
}

export default function WithDiscordAlasteraRulesKeywordPage() {
  return <StaticKeywordPage slug="with-discord-alastera-rules" />;
}
