import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-download-latin-america');
}

export default function WithDiscordDownloadLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-download-latin-america" />;
}
