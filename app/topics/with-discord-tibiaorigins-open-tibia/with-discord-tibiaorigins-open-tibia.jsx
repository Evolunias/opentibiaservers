import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiaorigins-open-tibia');
}

export default function WithDiscordTibiaoriginsOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiaorigins-open-tibia" />;
}
