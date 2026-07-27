import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-thaisot-download');
}

export default function WithDiscordThaisotDownloadKeywordPage() {
  return <StaticKeywordPage slug="with-discord-thaisot-download" />;
}
