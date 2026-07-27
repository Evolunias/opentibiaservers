import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-evolunia');
}

export default function WithDiscordEvoluniaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-evolunia" />;
}
