import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-blazera-download');
}

export default function WithDiscordBlazeraDownloadKeywordPage() {
  return <StaticKeywordPage slug="with-discord-blazera-download" />;
}
