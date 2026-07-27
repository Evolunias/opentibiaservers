import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-zezenia-online-website');
}

export default function WithDiscordZezeniaOnlineWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-discord-zezenia-online-website" />;
}
