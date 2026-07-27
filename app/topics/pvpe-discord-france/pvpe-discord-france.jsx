import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-discord-france');
}

export default function PvpeDiscordFranceKeywordPage() {
  return <StaticKeywordPage slug="pvpe-discord-france" />;
}
