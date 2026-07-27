import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-discord-argentina');
}

export default function EvoDiscordArgentinaKeywordPage() {
  return <StaticKeywordPage slug="evo-discord-argentina" />;
}
