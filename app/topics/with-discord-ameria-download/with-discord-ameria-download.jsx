import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-ameria-download');
}

export default function WithDiscordAmeriaDownloadKeywordPage() {
  return <StaticKeywordPage slug="with-discord-ameria-download" />;
}
