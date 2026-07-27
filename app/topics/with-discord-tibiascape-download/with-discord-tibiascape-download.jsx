import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiascape-download');
}

export default function WithDiscordTibiascapeDownloadKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiascape-download" />;
}
