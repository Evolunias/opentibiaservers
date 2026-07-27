import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiame-download');
}

export default function WithDiscordTibiameDownloadKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiame-download" />;
}
