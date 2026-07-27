import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-eternal-odyssey-tibia');
}

export default function WithDiscordEternalOdysseyTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-eternal-odyssey-tibia" />;
}
