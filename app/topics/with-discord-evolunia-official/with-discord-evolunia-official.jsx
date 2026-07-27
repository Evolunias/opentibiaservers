import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-evolunia-official');
}

export default function WithDiscordEvoluniaOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-discord-evolunia-official" />;
}
