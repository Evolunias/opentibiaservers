import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-nto-star-download');
}

export default function WithDiscordNtoStarDownloadKeywordPage() {
  return <StaticKeywordPage slug="with-discord-nto-star-download" />;
}
