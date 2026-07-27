import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-venoreot-login');
}

export default function WithDiscordVenoreotLoginKeywordPage() {
  return <StaticKeywordPage slug="with-discord-venoreot-login" />;
}
