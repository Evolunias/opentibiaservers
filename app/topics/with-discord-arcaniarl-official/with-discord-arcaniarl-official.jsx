import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-arcaniarl-official');
}

export default function WithDiscordArcaniarlOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-discord-arcaniarl-official" />;
}
