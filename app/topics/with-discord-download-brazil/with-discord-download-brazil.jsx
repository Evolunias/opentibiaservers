import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-download-brazil');
}

export default function WithDiscordDownloadBrazilKeywordPage() {
  return <StaticKeywordPage slug="with-discord-download-brazil" />;
}
