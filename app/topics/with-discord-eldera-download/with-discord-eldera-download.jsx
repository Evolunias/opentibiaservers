import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-eldera-download');
}

export default function WithDiscordElderaDownloadKeywordPage() {
  return <StaticKeywordPage slug="with-discord-eldera-download" />;
}
