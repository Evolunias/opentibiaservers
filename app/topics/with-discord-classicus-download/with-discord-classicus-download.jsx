import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-classicus-download');
}

export default function WithDiscordClassicusDownloadKeywordPage() {
  return <StaticKeywordPage slug="with-discord-classicus-download" />;
}
