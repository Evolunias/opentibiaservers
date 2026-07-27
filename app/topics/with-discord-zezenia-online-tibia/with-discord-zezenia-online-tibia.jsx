import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-zezenia-online-tibia');
}

export default function WithDiscordZezeniaOnlineTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-zezenia-online-tibia" />;
}
