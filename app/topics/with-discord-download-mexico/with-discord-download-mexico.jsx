import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-download-mexico');
}

export default function WithDiscordDownloadMexicoKeywordPage() {
  return <StaticKeywordPage slug="with-discord-download-mexico" />;
}
