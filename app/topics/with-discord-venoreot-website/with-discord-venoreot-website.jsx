import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-venoreot-website');
}

export default function WithDiscordVenoreotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-discord-venoreot-website" />;
}
