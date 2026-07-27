import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-download-usa');
}

export default function WithDiscordDownloadUsaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-download-usa" />;
}
