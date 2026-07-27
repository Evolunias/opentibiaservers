import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiara-tibia');
}

export default function WithDiscordTibiaraTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiara-tibia" />;
}
