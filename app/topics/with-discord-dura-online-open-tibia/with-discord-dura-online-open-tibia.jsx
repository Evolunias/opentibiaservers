import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-dura-online-open-tibia');
}

export default function WithDiscordDuraOnlineOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-dura-online-open-tibia" />;
}
