import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-evolera-tibia');
}

export default function WithDiscordEvoleraTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-evolera-tibia" />;
}
