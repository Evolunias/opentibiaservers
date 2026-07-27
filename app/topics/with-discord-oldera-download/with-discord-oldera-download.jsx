import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-oldera-download');
}

export default function WithDiscordOlderaDownloadKeywordPage() {
  return <StaticKeywordPage slug="with-discord-oldera-download" />;
}
