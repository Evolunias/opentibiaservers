import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibianus-open-tibia');
}

export default function WithDiscordTibianusOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibianus-open-tibia" />;
}
