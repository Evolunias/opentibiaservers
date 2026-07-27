import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-shadowcores-rules');
}

export default function WithDiscordShadowcoresRulesKeywordPage() {
  return <StaticKeywordPage slug="with-discord-shadowcores-rules" />;
}
