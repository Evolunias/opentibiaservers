import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-discord-canada');
}

export default function EvoDiscordCanadaKeywordPage() {
  return <StaticKeywordPage slug="evo-discord-canada" />;
}
