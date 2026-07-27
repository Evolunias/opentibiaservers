import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-eternal-odyssey-open-tibia');
}

export default function WithDiscordEternalOdysseyOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-eternal-odyssey-open-tibia" />;
}
