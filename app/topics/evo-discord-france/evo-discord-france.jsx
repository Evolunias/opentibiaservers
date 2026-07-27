import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-discord-france');
}

export default function EvoDiscordFranceKeywordPage() {
  return <StaticKeywordPage slug="evo-discord-france" />;
}
