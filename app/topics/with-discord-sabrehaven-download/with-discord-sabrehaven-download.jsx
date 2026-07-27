import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-sabrehaven-download');
}

export default function WithDiscordSabrehavenDownloadKeywordPage() {
  return <StaticKeywordPage slug="with-discord-sabrehaven-download" />;
}
