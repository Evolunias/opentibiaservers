import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-venoreot-wiki');
}

export default function WithDiscordVenoreotWikiKeywordPage() {
  return <StaticKeywordPage slug="with-discord-venoreot-wiki" />;
}
