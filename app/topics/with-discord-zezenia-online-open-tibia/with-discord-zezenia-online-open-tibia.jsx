import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-zezenia-online-open-tibia');
}

export default function WithDiscordZezeniaOnlineOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-zezenia-online-open-tibia" />;
}
