import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-download-uk');
}

export default function WithDiscordDownloadUkKeywordPage() {
  return <StaticKeywordPage slug="with-discord-download-uk" />;
}
