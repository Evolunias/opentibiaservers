import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-unline-download');
}

export default function WithDiscordUnlineDownloadKeywordPage() {
  return <StaticKeywordPage slug="with-discord-unline-download" />;
}
