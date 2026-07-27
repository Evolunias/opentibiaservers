import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-aurera-global-open-tibia');
}

export default function WithDiscordAureraGlobalOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-aurera-global-open-tibia" />;
}
