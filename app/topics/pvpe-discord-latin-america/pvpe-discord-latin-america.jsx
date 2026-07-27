import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-discord-latin-america');
}

export default function PvpeDiscordLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-discord-latin-america" />;
}
