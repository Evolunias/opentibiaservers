import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-marolaot-open-tibia');
}

export default function WithDiscordMarolaotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-marolaot-open-tibia" />;
}
