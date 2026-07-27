import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-serenity-download');
}

export default function WithDiscordSerenityDownloadKeywordPage() {
  return <StaticKeywordPage slug="with-discord-serenity-download" />;
}
