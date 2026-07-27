import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-evolunia-open-tibia');
}

export default function WithDiscordEvoluniaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-evolunia-open-tibia" />;
}
