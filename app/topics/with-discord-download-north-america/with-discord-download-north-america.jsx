import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-download-north-america');
}

export default function WithDiscordDownloadNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-download-north-america" />;
}
