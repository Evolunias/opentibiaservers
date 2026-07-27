import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-dura-online-website');
}

export default function WithDiscordDuraOnlineWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-discord-dura-online-website" />;
}
