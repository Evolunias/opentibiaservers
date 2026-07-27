import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-otmadness-download');
}

export default function WithDiscordOtmadnessDownloadKeywordPage() {
  return <StaticKeywordPage slug="with-discord-otmadness-download" />;
}
