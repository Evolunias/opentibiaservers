import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-rubinot-download');
}

export default function WithDiscordRubinotDownloadKeywordPage() {
  return <StaticKeywordPage slug="with-discord-rubinot-download" />;
}
