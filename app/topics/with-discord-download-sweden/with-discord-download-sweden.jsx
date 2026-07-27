import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-download-sweden');
}

export default function WithDiscordDownloadSwedenKeywordPage() {
  return <StaticKeywordPage slug="with-discord-download-sweden" />;
}
