import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-venoreot-official');
}

export default function WithDiscordVenoreotOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-discord-venoreot-official" />;
}
