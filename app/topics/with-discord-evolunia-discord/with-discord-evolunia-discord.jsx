import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-evolunia-discord');
}

export default function WithDiscordEvoluniaDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-discord-evolunia-discord" />;
}
