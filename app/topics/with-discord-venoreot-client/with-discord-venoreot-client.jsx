import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-venoreot-client');
}

export default function WithDiscordVenoreotClientKeywordPage() {
  return <StaticKeywordPage slug="with-discord-venoreot-client" />;
}
