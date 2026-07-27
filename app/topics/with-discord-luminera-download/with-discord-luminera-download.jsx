import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-luminera-download');
}

export default function WithDiscordLumineraDownloadKeywordPage() {
  return <StaticKeywordPage slug="with-discord-luminera-download" />;
}
