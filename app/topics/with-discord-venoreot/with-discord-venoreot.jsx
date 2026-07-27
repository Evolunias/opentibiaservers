import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-venoreot');
}

export default function WithDiscordVenoreotKeywordPage() {
  return <StaticKeywordPage slug="with-discord-venoreot" />;
}
