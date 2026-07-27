import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibijka-download');
}

export default function WithDiscordTibijkaDownloadKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibijka-download" />;
}
