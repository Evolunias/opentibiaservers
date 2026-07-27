import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-download-france');
}

export default function WithDiscordDownloadFranceKeywordPage() {
  return <StaticKeywordPage slug="with-discord-download-france" />;
}
