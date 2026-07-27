import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-venoreot-ots');
}

export default function WithDiscordVenoreotOtsKeywordPage() {
  return <StaticKeywordPage slug="with-discord-venoreot-ots" />;
}
