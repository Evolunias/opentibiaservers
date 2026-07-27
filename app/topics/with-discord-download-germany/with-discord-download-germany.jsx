import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-download-germany');
}

export default function WithDiscordDownloadGermanyKeywordPage() {
  return <StaticKeywordPage slug="with-discord-download-germany" />;
}
