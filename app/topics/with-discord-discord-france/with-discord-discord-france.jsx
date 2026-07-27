import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-discord-france');
}

export default function WithDiscordDiscordFranceKeywordPage() {
  return <StaticKeywordPage slug="with-discord-discord-france" />;
}
