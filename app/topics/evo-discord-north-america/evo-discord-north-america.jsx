import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-discord-north-america');
}

export default function EvoDiscordNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evo-discord-north-america" />;
}
