import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-download-poland');
}

export default function WithDiscordDownloadPolandKeywordPage() {
  return <StaticKeywordPage slug="with-discord-download-poland" />;
}
