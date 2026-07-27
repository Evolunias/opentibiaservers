import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiara-download');
}

export default function WithDiscordTibiaraDownloadKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiara-download" />;
}
