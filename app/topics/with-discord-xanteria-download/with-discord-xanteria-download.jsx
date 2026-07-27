import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-xanteria-download');
}

export default function WithDiscordXanteriaDownloadKeywordPage() {
  return <StaticKeywordPage slug="with-discord-xanteria-download" />;
}
