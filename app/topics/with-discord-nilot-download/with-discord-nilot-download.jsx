import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-nilot-download');
}

export default function WithDiscordNilotDownloadKeywordPage() {
  return <StaticKeywordPage slug="with-discord-nilot-download" />;
}
