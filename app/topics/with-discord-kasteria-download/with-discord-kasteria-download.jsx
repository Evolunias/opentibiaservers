import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-kasteria-download');
}

export default function WithDiscordKasteriaDownloadKeywordPage() {
  return <StaticKeywordPage slug="with-discord-kasteria-download" />;
}
