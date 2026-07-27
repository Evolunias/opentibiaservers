import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiaretro-download');
}

export default function WithDiscordTibiaretroDownloadKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiaretro-download" />;
}
