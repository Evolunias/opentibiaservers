import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiaorigins-tibia');
}

export default function WithDiscordTibiaoriginsTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiaorigins-tibia" />;
}
