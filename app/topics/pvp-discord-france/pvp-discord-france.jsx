import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-discord-france');
}

export default function PvpDiscordFranceKeywordPage() {
  return <StaticKeywordPage slug="pvp-discord-france" />;
}
