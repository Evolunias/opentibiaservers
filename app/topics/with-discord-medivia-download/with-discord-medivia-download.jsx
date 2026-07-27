import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-medivia-download');
}

export default function WithDiscordMediviaDownloadKeywordPage() {
  return <StaticKeywordPage slug="with-discord-medivia-download" />;
}
