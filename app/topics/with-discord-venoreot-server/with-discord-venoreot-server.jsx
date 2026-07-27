import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-venoreot-server');
}

export default function WithDiscordVenoreotServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-venoreot-server" />;
}
