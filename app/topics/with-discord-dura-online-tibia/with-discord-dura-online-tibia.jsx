import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-dura-online-tibia');
}

export default function WithDiscordDuraOnlineTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-dura-online-tibia" />;
}
