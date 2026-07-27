import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiascape-open-tibia');
}

export default function WithDiscordTibiascapeOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiascape-open-tibia" />;
}
