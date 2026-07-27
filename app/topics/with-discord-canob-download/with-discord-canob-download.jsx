import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-canob-download');
}

export default function WithDiscordCanobDownloadKeywordPage() {
  return <StaticKeywordPage slug="with-discord-canob-download" />;
}
