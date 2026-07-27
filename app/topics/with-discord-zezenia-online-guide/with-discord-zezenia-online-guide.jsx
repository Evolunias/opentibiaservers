import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-zezenia-online-guide');
}

export default function WithDiscordZezeniaOnlineGuideKeywordPage() {
  return <StaticKeywordPage slug="with-discord-zezenia-online-guide" />;
}
