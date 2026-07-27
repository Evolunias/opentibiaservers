import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-aurera-global-tibia');
}

export default function WithDiscordAureraGlobalTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-aurera-global-tibia" />;
}
