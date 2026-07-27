import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-archlight-download');
}

export default function WithDiscordArchlightDownloadKeywordPage() {
  return <StaticKeywordPage slug="with-discord-archlight-download" />;
}
