import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-download-europe');
}

export default function WithDiscordDownloadEuropeKeywordPage() {
  return <StaticKeywordPage slug="with-discord-download-europe" />;
}
