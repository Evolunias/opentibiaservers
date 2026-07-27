import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-venoreot-rules');
}

export default function WithDiscordVenoreotRulesKeywordPage() {
  return <StaticKeywordPage slug="with-discord-venoreot-rules" />;
}
