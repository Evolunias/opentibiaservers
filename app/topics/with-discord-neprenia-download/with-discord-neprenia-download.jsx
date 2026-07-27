import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-neprenia-download');
}

export default function WithDiscordNepreniaDownloadKeywordPage() {
  return <StaticKeywordPage slug="with-discord-neprenia-download" />;
}
